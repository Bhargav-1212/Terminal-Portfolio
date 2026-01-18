import { registerCommand } from '../command-registry';
import { helpCommand, clearCommand, historyCommand, quoteCommand } from './utility';
import { whoamiCommand, dateCommand, timeCommand, uptimeCommand, sysinfoCommand } from './system';
import { uppercaseCommand, lowercaseCommand, reverseCommand, capitalizeCommand, lengthCommand } from './text';
import { coinCommand, diceCommand, rpsCommand, matrixCommand, tttCommand } from './fun';
import { ipCommand, pingCommand, dnsCommand, curlCommand, geoCommand, weatherCommand } from './network';
import { base64Command, jsonCommand, uuidCommand, hashCommand, sortCommand, asciiCommand } from './dev';
import { aboutCommand, projectsCommand, skillsCommand, experienceCommand, contactCommand, socialCommand, educationCommand, achievementsCommand } from './personal';

export const registerAllCommands = () => {
    // Utility
    registerCommand('help', helpCommand);
    registerCommand('?', helpCommand);
    registerCommand('commands', helpCommand); // Alias
    registerCommand('clear', clearCommand);
    registerCommand('cls', clearCommand); // Alias
    registerCommand('history', historyCommand);
    registerCommand('quote', quoteCommand);

    // System
    registerCommand('whoami', whoamiCommand);
    registerCommand('date', dateCommand);
    registerCommand('time', timeCommand);
    registerCommand('uptime', uptimeCommand);
    registerCommand('sysinfo', sysinfoCommand);

    // Text
    registerCommand('uppercase', uppercaseCommand);
    registerCommand('lowercase', lowercaseCommand);
    registerCommand('reverse', reverseCommand);
    registerCommand('capitalize', capitalizeCommand);
    registerCommand('length', lengthCommand);

    // Fun
    registerCommand('coin', coinCommand);
    registerCommand('dice', diceCommand);
    registerCommand('rps', rpsCommand);
    registerCommand('matrix', matrixCommand);
    registerCommand('ttt', tttCommand);

    // Network
    registerCommand('ip', ipCommand);
    registerCommand('ping', pingCommand);
    registerCommand('dns', dnsCommand);
    registerCommand('curl', curlCommand);
    registerCommand('geo', geoCommand);
    registerCommand('weather', weatherCommand);

    // Dev
    registerCommand('base64', base64Command);
    registerCommand('json', jsonCommand);
    registerCommand('uuid', uuidCommand);
    registerCommand('hash', hashCommand);
    registerCommand('sort', sortCommand);
    registerCommand('ascii', asciiCommand);

    // Personal
    registerCommand('about', aboutCommand);
    registerCommand('projects', projectsCommand);
    registerCommand('skills', skillsCommand);
    registerCommand('experience', experienceCommand);
    registerCommand('contact', contactCommand);
    registerCommand('social', socialCommand);
    registerCommand('education', educationCommand);
    registerCommand('achievements', achievementsCommand);
};
