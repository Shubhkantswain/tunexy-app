import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '~/components/ui/dialog';
import { PauseIcon, PlayIcon } from '~/Svgs';

const playlists = [
    {
        id: 1,
        title: "Punjabi Hip Hop Hits",
        subtitle: "Shubh, Sidhu Moose Wala, Karan Aujla, A...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "Hip Hop Hits",
    },
    {
        id: 2,
        title: "Bollywood Party",
        subtitle: "Badshah, Tanishk Bagchi, Arijit Singh,...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "Party",
    },
    {
        id: 3,
        title: "Bollywood Fire",
        subtitle: "Neha Kakkar, Tanishk Bagchi, Shreya...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "Fire",
    },
    {
        id: 4,
        title: "Midnight Romance: Hindi",
        subtitle: "Arijit Singh, Vishal Mishra, Sachin-Jigar,...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "Hindi",
    },
    {
        id: 5,
        title: "00s Bollywood Romance",
        subtitle: "Pritam, Alka Yagnik, Udit Narayan, Shreya...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "Romance",
    },
    {
        id: 6,
        title: "Uncut Bollywood",
        subtitle: "Arijit Singh, Pritam, Sachet Parampara,...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "BOLLYWOOD",
    },
    {
        id: 7,
        title: "Uncut Bollywood",
        subtitle: "Arijit Singh, Pritam, Sachet Parampara,...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "BOLLYWOOD",
    },
    {
        id: 8,
        title: "Uncut Bollywood",
        subtitle: "Arijit Singh, Pritam, Sachet Parampara,...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "BOLLYWOOD",
    },
];

// Define the props for the ShowTrackDialog component
interface ShowTrackDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

function ShowTrackDialog({ isOpen, onClose}: ShowTrackDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto bg-[#111111] border-zinc-700 text-white [&::-webkit-scrollbar]:hidden"> {/* Black gradient background */}
                <DialogHeader>
                    <DialogTitle className="text-white">Tracks</DialogTitle> {/* White text for title */}
                    <DialogDescription className="text-gray-400">Here are all the tracks:</DialogDescription> {/* Light gray text for description */}
                </DialogHeader>
                <div className="space-y-3">
                    {playlists.map((track) => (
                        <div
                            key={track.id}
                            className="p-3 rounded-lg hover:bg-[#1c1c1c] bg-[#1a1a1a] cursor-pointer transition-colors flex items-center gap-3 relative 
              border border-transparent hover:border-[#25d1da] hover:shadow-lg hover:shadow-[#25d1da]/30 duration-300 ease-in-out"
                           
                        >
                            {/* Track Image */}
                            <img
                                src={track.image || 'https://via.placeholder.com/50'} // Fallback image if no URL is provided
                                alt={track.title}
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-sm object-cover"
                            />

                            {/* Track Details */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm text-white">{track.title}</h3> {/* White text for title */}
                                <p className="text-xs text-gray-400">{track.subtitle}</p> {/* Light gray text for artist */}
                            </div>

                            {/* Play Button */}
                            <button className="text-white">
                                {
                                    (false) ? (
                                        <PauseIcon width="24" height="24" />
                                    ) : (
                                        <PlayIcon width="24" height="24" />
                                    )
                                }
                            </button>

                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ShowTrackDialog;