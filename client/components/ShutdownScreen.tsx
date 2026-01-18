import React from 'react';
import { Power } from 'lucide-react';

interface ShutdownScreenProps {
    onRestart: () => void;
    isShuttingDown: boolean;
}

export const ShutdownScreen: React.FC<ShutdownScreenProps> = ({ onRestart, isShuttingDown }) => {
    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center font-mono text-gray-300">
            {!isShuttingDown && (
                <div className="flex flex-col items-center gap-8 animate-in fade-in duration-1000">
                    <div className="text-xl tracking-widest">[ SYSTEM SUSPENDED ]</div>
                    <div className="text-sm typing-effect">Awaiting user request...</div>

                    <button
                        onClick={onRestart}
                        className="mt-8 group relative flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Power className="w-16 h-16 text-gray-500 group-hover:text-white transition-colors duration-300" />
                    </button>
                </div>
            )}
        </div>
    );
};
