import React from 'react';
import { Power } from 'lucide-react';

interface PowerButtonProps {
    onClick: () => void;
    className?: string;
}

export const PowerButton: React.FC<PowerButtonProps> = ({ onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 group ${className}`}
            title="Power System"
        >
            <Power className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
        </button>
    );
};
