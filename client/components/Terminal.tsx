import React, { useState, useRef, useEffect, useCallback } from "react";
import { registerAllCommands } from "../lib/commands";
import { registerCommand, registry } from "../lib/command-registry";
import { PowerButton } from "./PowerButton";
import { ShutdownScreen } from "./ShutdownScreen";
import { FullScreenButton } from "./FullScreenButton";
import { playStartupSound, playShutdownSound } from "../lib/sound-effects";

export interface TerminalLine {
  type: "command" | "output" | "error" | "system";
  content: React.ReactNode;
}

interface TerminalProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  username?: string;
  hostname?: string;
}

// Initialize commands
registerAllCommands();

type PowerState = "on" | "shutting_down" | "off" | "booting";

export const Terminal: React.FC<TerminalProps> = ({
  children,
  footer,
  username = "visitor",
  hostname = "bhargav.dev",
}) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [powerState, setPowerState] = useState<PowerState>("on");

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (powerState === "on") {
      inputRef.current?.focus();
    }
  }, [powerState]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const addSystemLog = async (message: string) => {
    // Spinner frame animation
    const id = Date.now() + Math.random();

    // Add initial line with spinner
    setLines(prev => [...prev, {
      type: "system",
      content: <span key={id} className="flex items-center gap-2"><span className="text-cyan-500 animate-spin">⠋</span> {message}</span>
    }]);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 400));

    // Update line to success
    setLines(prev => {
      const newLines = [...prev];
      newLines[newLines.length - 1] = {
        type: "system",
        content: <span className="flex items-center gap-2"><span className="text-green-500 font-bold">[ OK ]</span> {message}</span>
      };
      return newLines;
    });
  };

  const handleShutdown = async () => {
    playShutdownSound();
    setPowerState("shutting_down");
    setLines([]); // Clear existing lines

    const logs = [
      "Logging off current user...",
      "Saving session state...",
      "Disconnecting remote connections...",
      "Stopping Network Manager...",
      "Disconnecting active network interfaces...",
      "Stopping User Sessions...",
      "Terminating background services...",
      "Stopping System Logger...",
      "Unmounting filesystems...",
      "Syncing disks...",
      "Powering off system...",
    ];

    for (const log of logs) {
      await addSystemLog(log);
    }

    await new Promise(resolve => setTimeout(resolve, 800));
    setPowerState("off");
  };

  const handleBoot = async () => {
    playStartupSound();
    setPowerState("booting");
    setLines([]);

    const logs = [
      "Booting system...",
      "Loading kernel modules...",
      "Mounting root filesystem...",
      "Starting system services...",
      "Initializing network interfaces...",
      "Starting graphical interface...",
    ];

    for (const log of logs) {
      await addSystemLog(log);
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    setLines([]); // Clear boot logs
    setPowerState("on");
  };

  const executeCommand = useCallback(async (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Add command to history and lines
    setHistory((prev) => [...prev, trimmed]);
    setLines((prev) => [...prev, { type: "command", content: `${username}@${hostname}:~$ ${trimmed}` }]);
    setInput("");
    setHistoryIndex(-1);

    const parts = trimmed.split(/\s+/);
    const commandName = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commandName === "exit" || commandName === "shutdown") {
      handleShutdown();
      return;
    }

    const command = registry[commandName];

    if (command) {
      try {
        const result = await Promise.resolve(command.execute(args));

        if (result === "__CLEAR__") {
          setLines([]);
          return;
        }

        // Handle string, array of strings, or ReactNode
        let content: React.ReactNode;
        if (typeof result === 'string') {
          content = result;
        } else if (Array.isArray(result)) {
          content = result.map((line, i) => <div key={i}>{line}</div>);
        } else {
          content = result as React.ReactNode;
        }

        setLines(prev => [...prev, { type: 'output', content }]);
      } catch (error) {
        setLines(prev => [...prev, { type: 'error', content: `Error executing command: ${error}` }]);
      }

    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: ${commandName}. Type 'help' for available commands.`,
        },
      ]);
    }
  }, [username, hostname]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key === "c") {
      e.preventDefault();
      setInput("");
    } else if ((e.ctrlKey || e.metaKey) && e.key === "l") {
      e.preventDefault();
      setLines([]);
    }
  };

  if (powerState === "off") {
    return <ShutdownScreen onRestart={handleBoot} isShuttingDown={false} />;
  }

  return (
    <div className="relative w-full h-screen bg-background text-foreground font-mono text-sm leading-relaxed flex flex-col overflow-hidden" onClick={() => inputRef.current?.focus()}>

      {powerState === "on" && (
        <>
          <div className="absolute bottom-4 left-4 z-50">
            <PowerButton onClick={handleShutdown} />
          </div>
          <div className="absolute bottom-4 right-4 z-50">
            <FullScreenButton />
          </div>
        </>
      )}

      {/* ShutdownScreen removed from here when shutting_down to keep logs visible */}

      <div className={`relative flex-1 overflow-y-auto p-6 md:p-8 transition-opacity duration-500 no-scrollbar ${powerState !== 'on' && powerState !== 'booting' && powerState !== 'shutting_down' ? 'opacity-0' : 'opacity-100'}`} ref={terminalRef}>
        {children}

        {lines.map((line, i) => (
          <div
            key={i}
            className={`mb-1 ${line.type === "error" ? "text-red-600" : ""
              }`}
            style={{
              animation: "fadeIn 0.2s ease-out",
            }}
          >
            {line.content}
          </div>
        ))}

        {powerState === 'on' && (
          <div className="flex items-center gap-2 pt-2">
            <span className="font-bold">{username}@{hostname}:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-foreground"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        )}
      </div>

      {footer && powerState === 'on' && (
        <div className="border-t border-foreground p-6 md:p-8 text-center text-xs bg-background">
          {footer}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
