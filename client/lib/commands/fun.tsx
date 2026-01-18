import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Command } from '../command-registry';

const CoinFlip = () => {
    const [result, setResult] = useState<string | null>(null);
    const [isFlipping, setIsFlipping] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setResult(Math.random() < 0.5 ? 'Heads' : 'Tails');
            setIsFlipping(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center gap-4 py-4">
            <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isFlipping ? 1800 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center bg-yellow-400/20 text-yellow-400 font-bold text-xl"
            >
                {isFlipping ? "?" : result?.[0]}
            </motion.div>
            <div className={`text-lg font-bold ${isFlipping ? 'animate-pulse' : 'text-green-400'}`}>
                {isFlipping ? "Flipping..." : `Result: ${result}`}
            </div>
        </div>
    );
};

const DiceRoll = () => {
    const [result, setResult] = useState<number | null>(null);
    const [isRolling, setIsRolling] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setResult(Math.floor(Math.random() * 6) + 1);
            setIsRolling(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center gap-4 py-4">
            <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: isRolling ? 720 : 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "backOut" }}
                className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-black font-bold text-3xl shadow-lg border-2 border-gray-300"
            >
                {isRolling ? "?" : result}
            </motion.div>
            <div className={`text-lg font-bold ${isRolling ? 'animate-pulse' : 'text-cyan-400'}`}>
                {isRolling ? "Rolling..." : `Result: ${result}`}
            </div>
        </div>
    );
};

export const coinCommand: Command = {
    description: 'Flip a coin with animation',
    category: 'fun',
    usage: 'coin',
    execute: () => <CoinFlip />
};

export const diceCommand: Command = {
    description: 'Roll a dice with animation',
    category: 'fun',
    usage: 'dice',
    execute: () => <DiceRoll />
};

export const rpsCommand: Command = {
    description: 'Play Rock, Paper, Scissors',
    category: 'fun',
    usage: 'rps <rock|paper|scissors>',
    execute: (args) => {
        const choice = args[0]?.toLowerCase();
        const valid = ['rock', 'paper', 'scissors'];
        if (!choice || !valid.includes(choice)) {
            return 'Usage: rps [rock|paper|scissors]';
        }
        const computer = valid[Math.floor(Math.random() * 3)];
        let result = 'Draw!';
        if (choice === computer) {
            result = 'Draw!';
        } else if (
            (choice === 'rock' && computer === 'scissors') ||
            (choice === 'paper' && computer === 'rock') ||
            (choice === 'scissors' && computer === 'paper')
        ) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }
        return [
            `You chose: ${choice}`,
            `Computer chose: ${computer}`,
            result,
        ];
    }
};

export const matrixCommand: Command = {
    description: 'Enter the matrix (visual effect)',
    category: 'fun',
    usage: 'matrix',
    execute: () => {
        return [
            "Wake up, Neo...",
            "The Matrix has you...",
            "Follow the white rabbit.",
            "Knock, knock, Neo."
        ];
    }
};

export const tttCommand: Command = {
    description: 'Tic-Tac-Toe preview',
    category: 'fun',
    usage: 'ttt',
    execute: () => "Tic-Tac-Toe not implemented yet! (Use 'rps' for now)"
};
