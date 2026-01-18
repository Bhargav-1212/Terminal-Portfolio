import { Command } from '../command-registry';


export const base64Command: Command = {
    description: 'Encode/Decode base64',
    category: 'dev',
    usage: 'base64 <encode|decode> <text>',
    execute: (args) => {
        const mode = args[0];
        const text = args.slice(1).join(' ');

        if (!mode || !text) return 'Usage: base64 <encode|decode> <text>';

        try {
            if (mode === 'encode') return btoa(text);
            if (mode === 'decode') return atob(text);
            return 'Usage: base64 <encode|decode> <text>';
        } catch {
            return 'Error: Invalid input';
        }
    }
};

export const jsonCommand: Command = {
    description: 'Format JSON',
    category: 'dev',
    usage: 'json <min|pretty> <json_string>',
    execute: (args) => {
        const mode = args[0];
        const text = args.slice(1).join(' ');
        if (!mode || !text) return 'Usage: json <min|pretty> <json_string>';

        try {
            const obj = JSON.parse(text);
            if (mode === 'min') return JSON.stringify(obj);
            if (mode === 'pretty') return JSON.stringify(obj, null, 2);
            return 'Usage: json <min|pretty> <json_string>';
        } catch {
            return 'Error: Invalid JSON string';
        }
    }
};

export const uuidCommand: Command = {
    description: 'Generate UUID',
    category: 'dev',
    usage: 'uuid',
    execute: () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

};

export const hashCommand: Command = {
    description: 'Generate SHA-256 hash',
    category: 'dev',
    usage: 'hash <text>',
    execute: async (args) => {
        const text = args.join(' ');
        if (!text) return 'Usage: hash <text>';

        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }
};

export const sortCommand: Command = {
    description: 'Sort lines of text',
    category: 'dev',
    usage: 'sort <item1> <item2> ...',
    execute: (args) => {
        if (args.length === 0) return 'Usage: sort <item1> <item2> ...';
        return args.sort().join('\n');
    }
};

import { generateAscii } from '../ascii';

export const asciiCommand: Command = {
    description: 'Generate ASCII art',
    category: 'dev',
    usage: 'ascii <text>',
    execute: (args) => {
        const text = args.join(' ');
        if (!text) return 'Usage: ascii <text>';

        const art = generateAscii(text);
        return <pre style={{ lineHeight: '1.2', fontFamily: 'monospace', whiteSpace: 'pre' }}>{art}</pre>;
    }
};
