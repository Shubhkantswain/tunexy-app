import React, { useEffect, useRef, useState } from 'react';
import { Search, Home, Heart, Plus, Download, User, Bell, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2 } from 'lucide-react';
import { AccountIcon, CloseIcon, CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, MicIcon, PlusIcon, SearchFilledIcon, SearchIcon } from '~/Svgs'
import { LogoIcon } from '~/Svgs';
import { Link, Outlet, useLocation, useNavigate } from '@remix-run/react';
import Header from './_header/Header';
import MainContent from './_mainContent/MainContent';
import PlaybackController from './_playbackController/PlaybackController';

const DesktopLayout = () => {


  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Scroll detection
  useEffect(() => {
    const mainContent = mainContentRef.current;
    if (!mainContent) return;

    const handleScroll = () => {
      setScrolled(mainContent.scrollTop > 10);
    };

    mainContent.addEventListener('scroll', handleScroll);
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, []);

  // Speech recognition
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

  // Click outside dropdown handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const isSearchPage = pathname === '/search';

  const containerRef = useRef<HTMLDivElement>(null);
  const [panelSize, setPanelSize] = useState(22); // Sidebar width in %
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = () => {
    setIsResizing(true);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';
  };

  const stopResizing = () => {
    setIsResizing(false);
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
  };

  const resize = (clientX: number) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newSize = ((clientX - rect.left) / rect.width) * 100;
    if (newSize > 10 && newSize < 40) {
      setPanelSize(newSize);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      resize(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        resize(e.touches[0].clientX);
      }
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', stopResizing);
      window.addEventListener('touchend', stopResizing);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', stopResizing);
      window.removeEventListener('touchend', stopResizing);
    };
  }, [isResizing]);

  const tabs = ['Playlists', 'Artists', 'Albums', 'Podcasts'];

  const scrollRef = useRef<HTMLDivElement>(null);


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = scrollRef.current?.scrollTop || 0;
      setIsScrolled(currentScrollTop > 0);
    };

    const div = scrollRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => {
      div?.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const viewOptions = [
    { id: 'compact', label: 'Default List', icon: DefaultListIcon },
    { id: 'list', label: 'Compact List', icon: CompactListIcon },
    { id: 'grid', label: 'Default Grid', icon: DefaultGridIcon },
    { id: 'large-grid', label: 'Compact Grid', icon: CompactGridIcon }
  ];


  const [selectedView, setSelectedView] = useState('list');
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleViewSelect = (viewId: string) => {
    setSelectedView(viewId);
    setIsDropdownOpen(false);
  };

  type ViewType = "Default List" | "Compact List" | "Default Grid" | "Compact Grid";


  const [view, setView] = useState<ViewType>("Default List")

  const setSize = (size: number) => {
    setPanelSize(size)
  }

  return (
    <div className="hidden md:flex h-screen bg-black text-white flex-col">
      {/* Main Header */}
      <Header />

      {/* Main Content */}
      <MainContent/>

      {/* Footer - Music Player */}
      <PlaybackController/>
    </div>
  );
};

export default DesktopLayout;