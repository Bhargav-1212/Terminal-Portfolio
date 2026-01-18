import { Command } from '../command-registry';

export const uppercaseCommand: Command = {
    description: 'Convert text to uppercase',
    category: 'text',
    usage: 'uppercase <text>',
    execute: (args) => {
        const text = args.join(' ');
        if (!text) return 'Usage: uppercase <text>';
        return text.toUpperCase();
    }
};

export const lowercaseCommand: Command = {
    description: 'Convert text to lowercase',
    category: 'text',
    usage: 'lowercase <text>',
    execute: (args) => {
        const text = args.join(' ');
        if (!text) return 'Usage: lowercase <text>';
        return text.toLowerCase();
    }
};

export const reverseCommand: Command = {
    description: 'Reverse text',
    category: 'text',
    usage: 'reverse <text>',
    execute: (args) => {
        const text = args.join(' ');
        if (!text) return 'Usage: reverse <text>';
        return text.split('').reverse().join('');
    }
};

export const capitalizeCommand: Command = {
    description: 'Capitalize first letter of each word',
    category: 'text',
    usage: 'capitalize <text>',
    execute: (args) => {
        const text = args.join(' ');
        if (!text) return 'Usage: capitalize <text>';
        return text.replace(/\b\w/g, l => l.toUpperCase());
    }
};

export const lengthCommand: Command = {
    description: 'Get length of text',
    category: 'text',
    usage: 'length <text>',
    execute: (args) => {
        const text = args.join(' ');
        if (!text) return 'Usage: length <text>';
        return `Length: ${text.length}`;
    }
};
