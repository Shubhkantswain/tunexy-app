import { useLocation, useNavigate } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react'
import { CloseIcon, LogoIcon, MicIcon, SearchIcon } from '~/Svgs';
import ListeningInterface from '../_app/Components/ListeningInterface';
import { useLoadingStore } from '~/store/useLoadingStore';

const route = () => {
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

  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white gap-4">
        <LogoIcon width="80" height="80" />
        <p className="text-2xl font-semibold tracking-wide">Tunexy-app</p>
      </div>
    )
  }

  return (
    <div className='p-4 md:p-8 max-w-[90rem] mx-auto'>
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

      <div className="mt-8 md:mt-0 text-white">
        <h2 className="text-lg font-semibold mb-4">Moods & Activities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {[
            { label: 'Moods', from: 'from-blue-600', to: 'to-cyan-600' },
            { label: 'Activities', from: 'from-purple-600', to: 'to-pink-600' },
            { label: 'Love', from: 'from-gray-800', to: 'to-slate-700' },
            { label: 'Workout', from: 'from-cyan-600', to: 'to-rose-600' },
            { label: 'Party', from: 'from-purple-700', to: 'to-red-500' },
            { label: 'Travel', from: 'from-emerald-400', to: 'to-yellow-600' },
            { label: 'Chill', from: 'from-slate-400', to: 'to-slate-600' },
            { label: 'Happy', from: 'from-purple-600', to: 'to-yellow-400' },
            { label: 'Wellness', from: 'from-indigo-800', to: 'to-orange-300' },
            { label: 'Sleep', from: 'from-blue-900', to: 'to-gray-500' },
            { label: 'At the Movies', from: 'from-indigo-900', to: 'to-rose-700' },
          ].map(({ label, from, to }) => (
            <button
              key={label}
              className={`rounded-md px-4 py-4 w-full font-semibold text-sm bg-gradient-to-r ${from} ${to} hover:scale-[1.02] transition-transform`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 text-white">
        <h2 className="text-lg font-semibold mb-4">Music By Genre</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {[
            { label: 'Moods', from: 'from-blue-600', to: 'to-cyan-600' },
            { label: 'Activities', from: 'from-purple-600', to: 'to-pink-600' },
            { label: 'Love', from: 'from-gray-800', to: 'to-slate-700' },
            { label: 'Workout', from: 'from-cyan-600', to: 'to-rose-600' },
            { label: 'Party', from: 'from-purple-700', to: 'to-red-500' },
            { label: 'Travel', from: 'from-emerald-400', to: 'to-yellow-600' },
            { label: 'Chill', from: 'from-slate-400', to: 'to-slate-600' },
            { label: 'Happy', from: 'from-purple-600', to: 'to-yellow-400' },
            { label: 'Wellness', from: 'from-indigo-800', to: 'to-orange-300' },
            { label: 'Sleep', from: 'from-blue-900', to: 'to-gray-500' },
            { label: 'At the Movies', from: 'from-indigo-900', to: 'to-rose-700' },
          ].map(({ label, from, to }) => (
            <button
              key={label}
              className={`rounded-md px-4 py-4 w-full font-semibold text-sm bg-gradient-to-r ${from} ${to} hover:scale-[1.02] transition-transform`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <ListeningInterface listening={listening} onStopListening={stopListening} />
    </div>
  )
}


export default route