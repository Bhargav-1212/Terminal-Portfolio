import { Command } from '../command-registry';

export const whoamiCommand: Command = {
    description: 'Quick identity snapshot',
    category: 'system',
    usage: 'whoami',
    execute: () => [
        "Name:           Cheerala Bhargav",
        "Role:           Computer Science Undergraduate | AI × Web × Blockchain",
        "Location:       Hyderabad, India",
        "Current Status: 2nd Year CSE, VIT-AP",
    ]
};

export const dateCommand: Command = {
    description: 'Show current date',
    category: 'system',
    usage: 'date',
    execute: () => new Date().toDateString()
};

export const timeCommand: Command = {
    description: 'Show current time',
    category: 'system',
    usage: 'time',
    execute: () => new Date().toLocaleTimeString()
};

export const uptimeCommand: Command = {
    description: 'Show professional timeline',
    category: 'system',
    usage: 'uptime',
    execute: () => [
        "Coding since:        2022",
        "Hackathons survived: Many 😄",
    ]
};

export const sysinfoCommand: Command = {
    description: 'Display system information',
    category: 'system',
    usage: 'sysinfo',
    execute: () => [
        "System Information:",
        "------------------",
        "OS:    Human v2.0",
        "CPU:   Problem Solver",
        "RAM:   Unlimited Curiosity",
        "Focus: AI × Web × Blockchain",
    ]
};
