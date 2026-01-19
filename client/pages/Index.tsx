import React, { useState, useEffect } from "react";
import { Terminal } from "@/components/Terminal";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ASCII_ART = `
██████╗░██╗░░██╗░█████╗░██████╗░░██████╗░░█████╗░██╗░░░██╗
██╔══██╗██║░░██║██╔══██╗██╔══██╗██╔════╝░██╔══██╗██║░░░██║
██████╦╝███████║███████║██████╔╝██║░░██╗░███████║╚██╗░██╔╝
██╔══██╗██╔══██║██╔══██║██╔══██╗██║░░╚██╗██╔══██║░╚████╔╝░
██████╦╝██║░░██║██║░░██║██║░░██║╚██████╔╝██║░░██║░░╚██╔╝░░
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░`;

export default function Index() {
  const [isDark, setIsDark] = useState(false);
  const [displayedAscii, setDisplayedAscii] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= ASCII_ART.length) {
        setDisplayedAscii(ASCII_ART.slice(0, currentIndex));
        currentIndex += 5; // Type 5 chars at a time for speed
      } else {
        setIsTypingComplete(true);
        clearInterval(intervalId);
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Terminal
      username="visitor"
      hostname="bhargav.dev"
      footer={
        <div className="text-xs text-foreground opacity-70">
          © 2026 C Bhargav — All Rights Reserved
        </div>
      }
    >
      <div className="mb-8 space-y-6">
        {/* Top bar with theme toggle, URL, and date */}
        <div className="flex items-center justify-between border-b border-foreground pb-3 text-xs">
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            title="Toggle dark mode"
          >
            {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
          </button>
          <span className="flex-1 text-center"></span>
          <span id="current-time" className="min-w-fit">
            {new Date().toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
        </div>

        {/* ASCII art title with typing animation */}
        <div className="text-[9px] sm:text-xs md:text-base leading-none font-bold overflow-x-auto min-h-[120px] scrollbar-hide">
          <pre
            style={{
              lineHeight: "0.85",
              fontFamily: "inherit",
              margin: 0,
              whiteSpace: "pre-wrap",
              overflow: "hidden",
            }}
          >
            {displayedAscii}
            {!isTypingComplete && <span className="animate-pulse">_</span>}
          </pre>
        </div>

        {/* Welcome message with staggered entry */}
        {isTypingComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-t border-b border-foreground py-4 space-y-2"
          >
            <div className="font-bold text-base">Welcome to My Terminal Portfolio</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs md:text-sm"
            >
              Type '<span className="text-cyan-400">help</span>' or '<span className="text-cyan-400">?</span>' to view available commands and explore.
            </motion.div>
          </motion.div>
        )}
      </div>

      {typeof window !== "undefined" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setInterval(() => {
                const el = document.getElementById('current-time');
                if (el) {
                  el.textContent = new Date().toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                  });
                }
              }, 1000);
            `,
          }}
        />
      )}
    </Terminal>
  );
}
