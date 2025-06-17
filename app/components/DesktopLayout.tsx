import React, { useEffect, useRef, useState } from 'react';
import { Search, Home, Heart, Plus, Download, User, Bell, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2 } from 'lucide-react';
import { AccountIcon, CloseIcon, CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, MicIcon, PlusIcon, SearchFilledIcon, SearchIcon } from '~/Svgs'
import { LogoIcon } from '~/Svgs';
import { Link, useLocation, useNavigate } from '@remix-run/react';

const libraryItems = [
  {
    id: 1,
    type: 'playlist',
    title: 'Liked Songs',
    subtitle: 'Playlist • 73 songs',
    img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"
  },
  {
    id: 1,
    type: 'playlist',
    title: 'Liked Songs',
    subtitle: 'Playlist • 73 songs',
    img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

  }, {
    id: 1,
    type: 'playlist',
    title: 'Liked Songs',
    subtitle: 'Playlist • 73 songs',
    img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

  },
  {
    id: 2,
    type: 'podcast',
    title: 'Your Episodes',
    subtitle: 'Saved & downloaded episodes',
    img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

  },
  {
    id: 3,
    type: 'folder',
    title: 'New Folder',
    subtitle: '0 playlists',
    img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

  },
  {
    id: 4,
    type: 'artist',
    title: 'Mithoon',
    subtitle: 'Artist',
    img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

  },
  {
    id: 5,
    type: 'artist',
    title: 'Pritam',
    subtitle: 'Artist',
    img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

  },
];

const DesktopLayout = ({ children }) => {
  const navigationItems = [
    { path: "/", name: "Home", Icon: HomeIcon, ActiveIcon: HomeFilledIcon, visible: true },
    { path: "/explore", name: "Explore", Icon: ExploreIcon, ActiveIcon: ExploreFilledIcon, visible: true },
    { path: "/my/library", name: "Library", Icon: LibrarayIcon, ActiveIcon: LibrarayFilledIcon, visible: true },
    { path: "/search", name: "Search", Icon: SearchIcon, ActiveIcon: SearchFilledIcon, visible: false },
  ];

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


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('list');
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Main Header */}
      <header className="bg-black bg-opacity-95 backdrop-blur-sm px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        {/* Left - Logo */}
        <div className="flex-1 flex items-center">
          <button className="flex items-center justify-center p-0">
            <LogoIcon width="35" height="35" />
          </button>
        </div>

        {/* Center - Navigation and Search */}
        <div className="flex-1 flex items-center justify-center gap-6">
          {navigationItems.map(({ path, name, Icon, ActiveIcon, visible }) => {
            const isActive = pathname == path;

            if (!visible) return null;

            return (
              <Link
                key={path}
                to={path}
                onClick={(e) => {
                  if (isActive) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
                className={`${isActive ? "" : "hover:bg-[#292929]"} p-2 rounded-full bg-[#1f1f1f] transition`}
              >
                {isActive ? <ActiveIcon width="20" height="20" /> : <Icon width="20" height="20" />}
              </Link>
            );
          })}

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
                {searchTerm ? (
                  <button
                    className="p-1.5 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                    onClick={() => setSearchTerm('')}
                  >
                    <CloseIcon width="13" height="13" />
                  </button>
                ) : (
                  <button
                    className={`p-1.5 rounded-full transition-colors ${listening ? 'bg-red-600' : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'}`}
                    onClick={startListening}
                    title={listening ? 'Stop microphone' : 'Start microphone'}
                  >
                    <MicIcon width="13" height="13" />
                  </button>
                )}

                <button
                  className={`${searchTerm ? "opacity-100 hover:bg-[#3a3a3a]" : "opacity-50"} p-1.5 rounded-full bg-[#2a2a2a] transition-colors`}
                  disabled={!searchTerm}
                >
                  <SearchIcon width="13" height="13" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right - Account */}
        <div className="flex-1 flex items-center justify-end">
          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-white"
            >
              <AccountIcon width="20" height="20" />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-[#181818] rounded shadow-lg z-50 text-sm border border-gray-700">
                {["Account", "Profile", "Upgrade to Premium", "Support", "Download"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  >
                    <span>{item}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14v-7" />
                    </svg>
                  </div>
                ))}
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</div>
                <hr className="border-gray-700" />
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Log out</div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 pt-[65px] pb-[81px] overflow-hidden px-[7px] gap-[3px]"
        ref={containerRef}
      >
        {/* Left Sidebar */}
        <aside
          className="bg-[#121212] flex flex-col rounded-md"
          style={{ width: `${panelSize}%` }}
        >
          <div className='px-4 pt-4'>

            {
              panelSize > 13 ? (
                <div className="flex items-center justify-between ">
                  <h2
                    className="text-md font-bold text-gray-200 flex items-center group gap-2 cursor-pointer"
                    onClick={() => setPanelSize(10)}
                    title="Click to collapse library panel"
                  >
                    My Library
                    <button className="hidden group-hover:block transition-opacity mt-1 text-gray-500 hover:text-white ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="14 8 9 12 14 16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </button>
                  </h2>

                  {panelSize > 19 ? (
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-4 py-2 hover:bg-[#282828] bg-[#1f1f1f] rounded-full transition-colors">
                        <PlusIcon width="15" height="15" />
                        <span className="text-xs text-white font-semibold">Create</span>
                      </button>
                    </div>
                  ) : (
                    <button className="hover:bg-[#282828] bg-[#1f1f1f] text-white p-2 rounded-full transition-colors">
                      <PlusIcon width="15" height="15" />
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid place-items-center mt-4 w-full space-y-2.5 -mb-3">
                  <button className=" text-white p-2 rounded-full transition-colors">
                    <LibrarayIcon width="27" height="27" />
                  </button>
                  <button className="hover:bg-[#282828] bg-[#1f1f1f] text-white p-2 rounded-full transition-colors">
                    <PlusIcon width="15" height="15" />
                  </button>
                </div>

              )
            }
          </div>


          <div className={`${isScrolled ? "shadow-[0_4px_5px_rgba(0,0,0,0.6)]" : ""} px-4 py-4`}>
            {
              panelSize > 13 ? (
                <div className="flex gap-6 overflow-x-auto hide-scrollbar">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      // onClick={() => setActiveTab(tab)}
                      className={`rounded-full text-xs font-medium whitespace-nowrap transition-colors ${"Playlists" === tab
                        ? 'text-[#3babdb]'
                        : 'text-white '
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              ) : (
                <>


                </>
              )
            }

          </div>

          <div className='overflow-y-auto hide-scrollbar'
            ref={scrollRef}
          >
            {/* Search & View Options */}
            {panelSize > 13 && (
              <div className="flex items-center justify-between relative px-4">
                {/* Search bar */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 rounded-sm w-full mr-2">
                  <div className="min-w-[20px] min-h-[20px] flex items-center justify-center">
                    <SearchIcon width="15" height="15" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search in Your Library"
                    className="bg-transparent text-xs text-white placeholder-gray-400 focus:outline-none w-full"
                  />
                </div>

                {/* List icon button with dropdown */}
                <div className="relative">
                  <button
                    ref={buttonRef}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`p-1.5  rounded-full transition-all duration-200 ${isDropdownOpen ? ' scale-110' : ''
                      }`}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    {
                      view == "Compact List" ? (
                        <CompactListIcon width="15" height="15" />
                      ) : (
                        view == "Default Grid" ? (
                          <DefaultGridIcon width="15" height="15" />

                        ) : (
                          view == "Compact Grid" ? (
                            <CompactGridIcon width="15" height="15" />
                          ) : (
                            <DefaultListIcon width="15" height="15" />
                          )
                        )
                      )
                    }
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    ref={dropdownRef}
                    className={`absolute right-0 top-full mt-2 w-40 bg-[#282828] border border-zinc-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-out z-50 ${isDropdownOpen
                      ? 'opacity-100 transform translate-y-0 scale-100'
                      : 'opacity-0 transform translate-y-[-10px] scale-95 pointer-events-none'
                      }`}
                  >
                    <div className="py-1">
                      <div className="px-3 py-2 text-xs font-medium text-gray-400 border-b border-zinc-700">
                        View as
                      </div>
                      {viewOptions.map((option, index) => (
                        <button
                          key={option.id}
                          onClick={() => setView(option.label)}
                          className={`w-full px-3 py-3 text-left text-xs hover:bg-[#3E3E3E] transition-all duration-200 flex items-center gap-3 ${view === option.label
                            ? 'text-[#3babdb] bg-[#3E3E3E]'
                            : 'text-gray-300'
                            }`}
                          style={{
                            animationDelay: `${index * 50}ms`
                          }}
                        >
                          <span className="text-base"><option.icon width="15" height="15" /></span>
                          <span>{option.label}</span>
                          {view === option.label && (
                            <span className="ml-auto text-[#3babdb] text-xs">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Library Items */}
            <div className="flex-1">
              <div className="space-y-1 px-2.5 pb-4 pt-2">
                {panelSize < 13 ? (
                  // Small Panel Design
                  libraryItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-center cursor-pointer group"
                    >
                      <div className="p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors relative flex-shrink-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-12 h-12 rounded-sm"
                        />

                      </div>
                    </div>
                  ))
                ) : view == "Compact List" ? (
                  // Compact List Design
                  libraryItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors cursor-pointer group"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium text-sm truncate">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs truncate">
                          {item.subtitle}
                        </p>
                      </div>
                      {item.type === 'folder' && (
                        <div className="text-gray-400">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M6 12l4-4-4-4v8z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))
                ) : view == "Default Grid" ? (
                  // Grid Design - Responsive columns based on panelSize
                  <div className={`p-2 grid ${panelSize > 28 ? 'grid-cols-3' :
                    panelSize < 17 ? 'grid-cols-1' :
                      'grid-cols-2'
                    } gap-6`}>
                    {libraryItems.map((item) => (
                      <div
                        key={item.id}
                        className="relative rounded-sm hover:scale-105 overflow-hidden cursor-pointer transition-transform duration-200"
                      >
                        {/* Card Background */}
                        <div className={` aspect-square relative`}>
                          {/* Icon/Avatar */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-15 h-15 rounded-sm object-cover"
                            />

                          </div>
                        </div>
                        {/* Text Content */}
                        <div className="py-2">
                          <h3 className="text-white font-medium text-sm truncate">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-xs truncate mt-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  view == "Compact Grid" ? (
                    // Grid Design - Responsive columns based on panelSize
                    <div className={`p-2 grid ${panelSize > 28 ? 'grid-cols-3' :
                      panelSize < 17 ? 'grid-cols-1' :
                        'grid-cols-2'
                      } gap-6`}>
                      {libraryItems.map((item) => (
                        <div
                          key={item.id}
                          className="relative rounded-sm hover:scale-105 overflow-hidden cursor-pointer transition-transform duration-200"
                        >
                          {/* Card Background */}
                          <div className={` aspect-square relative`}>
                            {/* Icon/Avatar */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <img
                                src={item.img}
                                alt={item.title}
                                className="w-15 h-15 rounded-sm object-cover"
                              />

                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  ) : (
                    // Default List Design
                    libraryItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors cursor-pointer group"
                      >
                        <div className="relative flex-shrink-0">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-12 h-12 rounded-sm"
                          />

                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium text-sm truncate">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-xs truncate">
                            {item.subtitle}
                          </p>
                        </div>
                        {item.type === 'folder' && (
                          <div className="text-gray-400">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M6 12l4-4-4-4v8z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))
                  )
                )
                }
              </div>
            </div>

          </div>

        </aside>

        {/* Drag Handle */}
        <div
          onMouseDown={startResizing}
          onTouchStart={startResizing}
          className="w-[1px] bg-transparent hover:bg-white cursor-col-resize transition-colors touch-none"
        />

        {/* Right Content Area */}
        <main
          className="flex-1 relative overflow-y-auto custom-scrollbar bg-[#121212] rounded-md"
          ref={mainContentRef}
        >
          {/* Gradient Overlay */}
          {/* <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-green-600 via-[#121212] to-[#121212] pointer-events-none z-0" /> */}

          <div className="relative z-10">
            <div className={`sticky top-0 z-40 transition-colors duration-200 text-white ${scrolled ? 'bg-[#121212] shadow-[0_4px_10px_rgba(0,0,0,0.6)]' : 'bg-transparent'}`}>
              <h1 className="text-3xl font-bold px-4 pt-4">All Music Podcasts</h1>
            </div>
            <div className="p-4">{children}</div>
          </div>
        </main>
      </div>

      {/* Footer - Music Player */}
      <footer className="bg-black  px-4 py-3 fixed bottom-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          {/* Currently Playing */}
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-14 h-14 bg-gray-700 rounded overflow-hidden">
              <img src="/api/placeholder/56/56" alt="Album" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">O Saathi</div>
              <div className="text-gray-400 text-xs">Atif Aslam, Arko</div>
            </div>
            <Heart className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex items-center space-x-4">
              <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <Play className="w-4 h-4 text-black ml-0.5" />
              </button>
              <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Repeat className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="flex items-center space-x-2 w-full max-w-md">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="flex-1 bg-gray-600 rounded-full h-1">
                <div className="bg-white w-1/4 h-1 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">4:11</span>
            </div>
          </div>

          {/* Volume and Options */}
          <div className="flex items-center space-x-3 flex-1 justify-end">
            <Volume2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <div className="w-20 bg-gray-600 rounded-full h-1">
              <div className="bg-white w-3/4 h-1 rounded-full"></div>
            </div>
            <Maximize2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesktopLayout;