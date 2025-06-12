import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { Switch } from "~/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

export default function SettingsPage() {
    const [language, setLanguage] = useState('English (English)');
    const [audioQuality, setAudioQuality] = useState('Automatic');
    const [normalizeVolume, setNormalizeVolume] = useState(true);
    const [compactLibrary, setCompactLibrary] = useState(true);

    return (
        <div className="min-h-screen text-white">
            <div className="mx-auto max-w-4xl p-6">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-lg md:text-xl font-bold">
                        Settings
                    </h2>
                    <Search className="h-6 w-6 text-slate-400" />
                </div>

                <div className="space-y-8">
                    {/* Account Section */}
                    <div className="space-y-2">
                        {/* <h2 className="text-md font-semibold">Account</h2> */}
                        
                        <h3 className="text-sm font-medium truncate">
                            {/* {playlist.title} */}
                            {"Punjabi Hip Hop Hits"}
                        </h3>

                        <div className="flex items-center justify-between">
                            <span className="text-slate-300 text-xs">Edit login methods</span>
                            <button className="flex items-center gap-2 rounded-md border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800">
                                Edit
                                <ExternalLink className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Language Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Language</h2>
                        <div className="space-y-2">
                            <p className="text-sm text-slate-400">
                                Choose language - Changes will be applied after restarting the app
                            </p>
                            <div className="w-64">
                                <Select value={language} onValueChange={setLanguage}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="English (English)">English (English)</SelectItem>
                                        <SelectItem value="Español (Spanish)">Español (Spanish)</SelectItem>
                                        <SelectItem value="Français (French)">Français (French)</SelectItem>
                                        <SelectItem value="Deutsch (German)">Deutsch (German)</SelectItem>
                                        <SelectItem value="日本語 (Japanese)">日本語 (Japanese)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Audio Quality Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Audio quality</h2>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <span className="text-slate-300">Streaming quality</span>
                                <div className="w-48">
                                    <Select value={audioQuality} onValueChange={setAudioQuality}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select audio quality" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Automatic">Automatic</SelectItem>
                                            <SelectItem value="Low">Low</SelectItem>
                                            <SelectItem value="Normal">Normal</SelectItem>
                                            <SelectItem value="High">High</SelectItem>
                                            <SelectItem value="Very High">Very High</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-slate-300">Normalize volume</span>
                                    <p className="text-sm text-slate-400">
                                        Set the same volume level for all songs and podcasts
                                    </p>
                                </div>
                                <Switch
                                    checked={normalizeVolume}
                                    onCheckedChange={setNormalizeVolume}
                                    id="normalize-volume"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Your Library Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Your Library</h2>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-300">Use compact library layout</span>
                            <Switch
                                checked={compactLibrary}
                                onCheckedChange={setCompactLibrary}
                                id="compact-library"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}