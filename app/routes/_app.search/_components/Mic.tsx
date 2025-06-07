import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog';


interface VoiceRecordingInterfaceProps {
    isOpen: boolean;
    onClose: () => void
}

const VoiceRecordingInterface: React.FC<VoiceRecordingInterfaceProps> = ({ isOpen, onClose }) => {
    const [isListening, setIsListening] = useState(true);

    const toggleListening = () => {
        setIsListening(!isListening);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto bg-[#111111] border-zinc-700 text-white [&::-webkit-scrollbar]:hidden"> {/* Black gradient background */}
                <DialogHeader>
                </DialogHeader>
                <div className="space-y-3">
                    {/* here */}
                    <div className="flex flex-col items-center justify-center min-h-[400px] bg-[#111111] text-white p-8 rounded-lg">
                        {/* Listening text */}
                        <div className="mb-12">
                            <h2 className="text-xl font-normal text-white">
                                {isListening ? 'Listening...' : 'Tap to start'}
                            </h2>
                        </div>

                        {/* Microphone button with pure Tailwind animations */}
                        <div className="relative">
                            {/* Outer pulse ring */}
                            {isListening && (
                                <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping" />
                            )}

                            {/* Middle pulse ring */}
                            {isListening && (
                                <div className="absolute inset-2 rounded-full bg-red-500 opacity-30 animate-pulse" />
                            )}

                            {/* Main microphone button */}
                            <button
                                onClick={toggleListening}
                                className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-2000 transform hover:scale-105 ${isListening
                                    ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30 animate-pulse'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                            >
                                {isListening ? (
                                    <Mic className="w-8 h-8 text-white" />
                                ) : (
                                    <MicOff className="w-8 h-8 text-white" />
                                )}
                            </button>
                        </div>

                        {/* Status indicator */}
                        <div className="mt-8 flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`} />
                            <span className="text-sm text-gray-400">
                                {isListening ? "Please speak your voice prompt" : "Tap the mic to start speaking"}

                            </span>
                        </div>

                       
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VoiceRecordingInterface;