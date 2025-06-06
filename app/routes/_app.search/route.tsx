import { useLocation, useNavigate } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react'
import { CloseIcon, MicIcon, SearchIcon } from '~/Svgs';
import ListeningInterface from '../_app/components/ListeningInterface';

const route = () => {
  const { pathname } = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Speech Recognition not supported');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log('🎤 Listening...');
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const spokenText = event.results[0][0].transcript;
      console.log('Transcript:', spokenText);
      setSearchTerm(spokenText);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
      console.log('🛑 Stopped Listening');
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) return;
    setSearchTerm('');
    setListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;
    recognitionRef.current.stop();
  };


  return (
    <>
      <div className="flex md:hidden items-center text-white bg-[#1f1f1f] px-4 py-[8px] rounded-md w-full">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1"
        />

        {/* Separator */}
        <div className="w-px h-7 bg-[#7B7B7B] opacity-50 mx-2"></div>

        <div className="flex items-center gap-2">
          {
            searchTerm ? (
              <button
                className="p-2 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                onClick={() => setSearchTerm('')}
              >
                <CloseIcon width="14" height="14" />
              </button>
            ) : (
              <button
                className={`p-2 rounded-full transition-colors ${listening ? 'bg-red-600' : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'
                  }`}
                onClick={startListening}
                title={listening ? 'Stop microphone' : 'Start microphone'}
              >
                <MicIcon width="14" height="14" />
              </button>
            )
          }

          <button
            className={`${searchTerm ? "opacity-100 hover:bg-[#3a3a3a]" : "opacity-50"} p-2 rounded-full bg-[#2a2a2a] transition-colors`}
            disabled={!searchTerm}
          >
            <SearchIcon width="14" height="14" />
          </button>
        </div>
      </div>

      <ListeningInterface listening={listening} onStopListening={stopListening} />
    </>
  )
}


export default route