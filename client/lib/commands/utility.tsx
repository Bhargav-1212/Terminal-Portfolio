import React from 'react';
import { Command, getAllCommands } from '../command-registry';

export const helpCommand: Command = {
    description: 'Show available commands',
    category: 'utility',
    usage: 'help [command]',
    execute: (args) => {
        const cmds = getAllCommands();
        const targetCmdName = args[0]?.toLowerCase();

        if (targetCmdName) {
            const cmd = cmds[targetCmdName];
            if (!cmd) {
                return `Command '${targetCmdName}' not found. Type 'help' to see all commands.`;
            }

            return (
                <div className="space-y-2">
                    <div className="text-yellow-400 font-bold text-lg">Help: {targetCmdName}</div>
                    <div className="text-gray-300">Description: {cmd.description}</div>
                    <div className="text-gray-400">Usage: <span className="text-cyan-400">{cmd.usage || targetCmdName}</span></div>
                    {cmd.category && <div className="text-gray-500 text-xs uppercase">Category: {cmd.category}</div>}
                </div>
            );
        }

        const coreCommands = ['about', 'projects', 'skills', 'experience', 'whoami', 'social', 'contact', 'education', 'achievements'];
        const funCommands = ['coin', 'dice', 'sysinfo', 'uptime', 'ping', 'matrix', 'quote'];

        const otherCommands = Object.keys(cmds).filter(cmd =>
            !coreCommands.includes(cmd) && !funCommands.includes(cmd) && cmd !== '?' && cmd !== 'commands' && cmd !== 'cls'
        );

        const renderCommandLink = (name: string) => (
            <span
                key={name}
                className="text-cyan-400 font-bold hover:underline cursor-pointer mr-4"
                onClick={() => {
                    const input = document.querySelector('input');
                    if (input) {
                        input.value = name;
                        input.focus();
                    }
                }}
            >
                {name}
            </span>
        );

        return (
            <div className="space-y-6">
                <div className="mb-4">
                    <h1 className="text-xl font-bold text-yellow-400 mb-2">Terminal Help Menu</h1>
                    <p className="text-gray-400">Type 'help &lt;command&gt;' for more specific information.</p>
                </div>

                <div>
                    <div className="text-lg font-bold text-purple-400 mb-2 border-b border-gray-700 pb-1">Core Commands</div>
                    <div className="flex flex-wrap gap-y-2">
                        {coreCommands.filter(cmd => cmds[cmd]).map(renderCommandLink)}
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold text-purple-400 mb-2 border-b border-gray-700 pb-1">Fun Commands</div>
                    <div className="flex flex-wrap gap-y-2">
                        {funCommands.filter(cmd => cmds[cmd]).map(renderCommandLink)}
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold text-gray-500 mb-2 border-b border-gray-700 pb-1">Other Commands</div>
                    <div className="flex flex-wrap gap-y-2">
                        {otherCommands.sort().map(renderCommandLink)}
                    </div>
                </div>

                <div className="mt-4 text-gray-500 text-sm">
                    Tip: Use Tab for auto-completion and arrow keys (↑ ↓) to navigate command history.
                </div>
            </div>
        );
    }
};

export const clearCommand: Command = {
    description: 'Clear the terminal screen',
    category: 'utility',
    execute: () => '__CLEAR__' // Special signal for the terminal component
};

export const historyCommand: Command = {
    description: 'View command history',
    category: 'utility',
    execute: () => 'Use Up/Down arrows to navigate history.'
};

export const quoteCommand: Command = {
    description: 'Get a random quote',
    category: 'utility',
    execute: () => {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Innovation distinguishes leaders from followers. - Steve Jobs",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "It is during our darkest moments that we must focus to see the light. - Aristotle",
            "The best time to plant a tree was 20 years ago. The second is now. - Chinese Proverb",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
};
