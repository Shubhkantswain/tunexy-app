import { useEffect, useState } from "react";
import { SmallPanelLibraryItemsSkeleton } from "~/components/Skeletons";
import { VIEW_COMPONENTS, VIEW_COMPONENTS_SKELETONS } from "~/constants";
import { useUIPreferencesStore } from "~/store/useUIPreferencesStore";

interface LibraryItemsProps {

}

const LibraryItems: React.FC<LibraryItemsProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { preferences: { view, panelSize } } = useUIPreferencesStore()

    const getViewComponent = () => {
        if (panelSize <= 13) return VIEW_COMPONENTS["Small Panel"];
        return VIEW_COMPONENTS[view] || VIEW_COMPONENTS["Default List"];
    };

    const CurrentViewComponent = getViewComponent();

    const getViewComponentSkeleton = () => {
        if (panelSize <= 13) return VIEW_COMPONENTS_SKELETONS["Small Panel"];
        return VIEW_COMPONENTS_SKELETONS[view] || VIEW_COMPONENTS_SKELETONS["Default List"];
    };

    const CurrentViewComponentSkeleton = getViewComponentSkeleton();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <CurrentViewComponentSkeleton />
    }

    return (
        <div className="flex-1 flex flex-col">
            <div className={`space-y-1 px-2.5 flex-grow ${panelSize > 13 ? "pt-2 pb-2" : "pt-0 pb-4"} overflow-auto`}>
                <CurrentViewComponent />
            </div>
        </div>
    )
}

export default LibraryItems