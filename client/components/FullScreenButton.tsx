import React, { useState } from 'react';
import { Maximize, Minimize } from 'lucide-react';

export const FullScreenButton: React.FC = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <button
            onClick={toggleFullScreen}
            className="p-2 rounded-full hover:bg-gray-100/10 text-gray-400 hover:text-white transition-all duration-300"
            title={isFullscreen ? "Exit Full Screen" : "Full Screen"}
        >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
    );
};
