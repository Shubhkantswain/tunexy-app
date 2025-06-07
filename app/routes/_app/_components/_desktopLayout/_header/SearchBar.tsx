import { useLocation, useNavigate } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon, MicIcon, SearchIcon } from '~/Svgs';

const SearchBar = () => {
  const { pathname } = useLocation();
  const isSearchPage = pathname === '/search';
  const navigate = useNavigate();

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

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (listening) {
      recognitionRef.current.stop();
    } else {
      setSearchTerm('');
      setListening(true);
      recognitionRef.current.start();
    }
  };

  return (
    <>
      {!isSearchPage ? (
        <div
          className="flex items-center text-[#919191] bg-white px-6 py-[10px] rounded-full w-[280px] cursor-pointer"
          onClick={() => {
            navigate('/search');
          }}
        >
          <input
            readOnly
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1 cursor-pointer"
          />
          <SearchIcon width="20" height="20" />
        </div>
      ) : (
        <div className="flex items-center text-white bg-[#1f1f1f] px-4 py-[7.5px] rounded-md w-[350px]">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1"
          />

          {/* Separator */}
          <div className="w-px h-6 bg-[#7B7B7B] opacity-50 mx-2"></div>

          <div className="flex items-center gap-2">
            {
              searchTerm && (
                <button
                  className="p-1.5 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                  onClick={() => setSearchTerm('')}
                >
                  <CloseIcon width="13" height="13" />
                </button>
              )
            }
            <button
              className={`p-1.5 rounded-full transition-colors ${listening ? 'bg-red-600' : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'
                }`}
              onClick={toggleListening}
              title={listening ? 'Stop microphone' : 'Start microphone'}
            >
              <MicIcon width="13" height="13" />
            </button>
            <button
              className={`${searchTerm ? "opacity-100 hover:bg-[#3a3a3a]" : "opacity-50"} p-1.5 rounded-full bg-[#2a2a2a] transition-colors`}
              disabled={!searchTerm}
            >
              <SearchIcon width="13" height="13" />
            </button>
          </div>
        </div>

      )}
    </>
  );
};

export default SearchBar;
