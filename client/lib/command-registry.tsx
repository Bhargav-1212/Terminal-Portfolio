import React from 'react';

export type CommandCategory = 'utility' | 'system' | 'text' | 'fun' | 'network' | 'dev' | 'personal' | 'about';

export interface CommandResponse {
    output: React.ReactNode;
    type?: 'success' | 'error' | 'info' | 'warning';
}

export interface Command {
    execute: (args: string[]) => React.ReactNode | CommandResponse | Promise<React.ReactNode | CommandResponse>;
    description: string;
    category: CommandCategory;
    usage?: string;
}

export const registry: Record<string, Command> = {};

export const registerCommand = (name: string, cmd: Command) => {
    registry[name] = cmd;
};

export const getCommand = (name: string): Command | undefined => {
    return registry[name];
};

export const getAllCommands = () => registry;
