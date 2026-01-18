import { Command } from '../command-registry';

export const ipCommand: Command = {
    description: 'Show IP address',
    category: 'network',
    usage: 'ip',
    execute: () => '127.0.0.1 (localhost)'
};

export const pingCommand: Command = {
    description: 'Check connectivity to interests',
    category: 'network',
    usage: 'ping [target]',
    execute: (args) => {
        const target = args[0]?.toLowerCase();

        if (!target) {
            return [
                "Pinging AI...",
                "Reply from AI: bytes=32 time<1ms TTL=128 (reachable)",
                "",
                "Pinging Blockchain...",
                "Reply from Blockchain: bytes=32 time<1ms TTL=128 (reachable)",
                "",
                "Pinging Healthcare...",
                "Reply from Healthcare: bytes=32 time<1ms TTL=128 (reachable)",
                "",
                "Pinging Legal Tech...",
                "Reply from Legal Tech: bytes=32 time<1ms TTL=128 (reachable)",
            ]
        }

        return [
            `Pinging ${target}...`,
            `Reply from ${target}: bytes=32 time<1ms TTL=128`,
            `Reply from ${target}: bytes=32 time<1ms TTL=128`,
            `Reply from ${target}: bytes=32 time<1ms TTL=128`,
            `Reply from ${target}: bytes=32 time<1ms TTL=128`,
            '',
            `Ping statistics for ${target}:`,
            '    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)',
        ];
    }
};

export const dnsCommand: Command = {
    description: 'DNS Lookup',
    category: 'network',
    usage: 'dns <domain>',
    execute: (args) => {
        const domain = args[0];
        if (!domain) return 'Usage: dns <domain>';
        return `DNS records for ${domain}:\n  A     1.2.3.4\n  AAAA  ::1\n  MX    mail.${domain}`;
    }
};

export const curlCommand: Command = {
    description: 'Transfer data from URL',
    category: 'network',
    usage: 'curl <url>',
    execute: async (args) => {
        const url = args[0];
        if (!url) return 'Usage: curl <url>';

        try {
            // Use a CORS proxy to allow fetching from any domain
            const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
            const response = await fetch(proxyUrl);
            const text = await response.text();

            return [
                `Fetching ${url}...`,
                `HTTP/1.1 ${response.status} ${response.statusText}`,
                `Content-Type: ${response.headers.get('content-type')}`,
                `Via: CORS Proxy`,
                '',
                text.substring(0, 1000) + (text.length > 1000 ? '\n... (truncated)' : '')
            ];
        } catch (error) {
            return `Error: Failed to fetch ${url}. This might be due to CORS restrictions or an invalid URL.`;
        }
    }
};

export const geoCommand: Command = {
    description: 'Get geolocation info',
    category: 'network',
    usage: 'geo',
    execute: () => [
        'IP: 127.0.0.1',
        'City: Hyderabad',
        'Region: Telangana',
        'Country: India',
        'Loc: 17.3850,78.4867',
        'Org: AS1234 Internet Service Provider'
    ]
};

export const weatherCommand: Command = {
    description: 'Get weather forecast',
    category: 'network',
    usage: 'weather [city]',
    execute: (args) => {
        const city = args[0] || 'Hyderabad';
        return [
            `Weather report for ${city}:`,
            'Condition: Sunny',
            'Temperature: 32°C (89.6°F)',
            'Humidity: 45%',
            'Wind: 10 km/h NW'
        ];
    }
};
