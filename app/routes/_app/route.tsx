import { useEffect, useRef, useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, } from '~/components/ui/resizable';
import { Search, Library, Plus, Heart, Music2, Home, Compass, List, Play, Headphones, Folder } from 'lucide-react';
import useIsLargeScreen from '~/hooks/UseMediaQuery';
import {
    SkipBack,
    SkipForward,
    Volume2,
    RotateCcw,
    RotateCw,
    User,
} from "lucide-react";
import { Link } from '@remix-run/react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '~/components/ui/drawer';
import { Slider } from '~/components/ui/slider';
import { ResizableHandle } from '~/components/ui/resizable';
import Header from './components/_desktopLayout/_header/Header';
import DesktopLayout from './components/_desktopLayout/DesktopLayout';
import MobileLayout from './components/_mobileLayout/MobileLayout';

export default function SpotifyCloneLayout({ children }: { children: React.ReactNode }) {
    const libraryItems = [
        {
            id: 1,
            type: 'playlist',
            title: 'Liked Songs',
            subtitle: 'Playlist • 73 songs',
            icon: Heart,
            color: 'bg-gradient-to-br from-purple-500 to-blue-600',
            iconColor: 'text-white',
        },
        {
            id: 1,
            type: 'playlist',
            title: 'Liked Songs',
            subtitle: 'Playlist • 73 songs',
            icon: Heart,
            color: 'bg-gradient-to-br from-purple-500 to-blue-600',
            iconColor: 'text-white',
        }, {
            id: 1,
            type: 'playlist',
            title: 'Liked Songs',
            subtitle: 'Playlist • 73 songs',
            icon: Heart,
            color: 'bg-gradient-to-br from-purple-500 to-blue-600',
            iconColor: 'text-white',
        },
        {
            id: 2,
            type: 'podcast',
            title: 'Your Episodes',
            subtitle: 'Saved & downloaded episodes',
            icon: Headphones,
            color: 'bg-green-600',
            iconColor: 'text-white',
        },
        {
            id: 3,
            type: 'folder',
            title: 'New Folder',
            subtitle: '0 playlists',
            icon: Folder,
            color: 'bg-gray-700',
            iconColor: 'text-gray-400',
        },
        {
            id: 4,
            type: 'artist',
            title: 'Mithoon',
            subtitle: 'Artist',
            avatar: 'data:image/svg+xml;base64,...',
            color: null,
            iconColor: null,
        },
        {
            id: 5,
            type: 'artist',
            title: 'Pritam',
            subtitle: 'Artist',
            avatar: 'data:image/svg+xml;base64,...',
            color: null,
            iconColor: null,
        },
    ];
    const tabs = ['Playlists', 'Artists', 'Albums', 'Podcasts'];
    const scrollRef = useRef<HTMLDivElement>(null);


    const [panelSize, setPanelSize] = useState(22);
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

    const isLgScreen = useIsLargeScreen()
    const minSize = isLgScreen ? 7 : 12




    const categories = ["All", "Music", "Podcasts"];
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <>
            <DesktopLayout />

            <MobileLayout />

        </>

    );
}