import { usePanelSizeStore } from "~/store/usePanelSizeStore";
import { ViewType } from "~/types";
import SmallPanelLibraryItems from "./SmallPanelLibraryItems";
import { VIEW_COMPONENTS } from "~/constants";

interface LibraryItemsProps {
    view: ViewType
}

const LibraryItems: React.FC<LibraryItemsProps> = ({ view }) => {
    const { panelSize } = usePanelSizeStore(); // Sidebar width in %

    const getViewComponent = () => {
        if (panelSize <= 13) return VIEW_COMPONENTS["Small Panel"];
        return VIEW_COMPONENTS[view] || VIEW_COMPONENTS["Default List"];
    };

    const CurrentViewComponent = getViewComponent();

    return ( 
        <div className="flex-1 flex flex-col">
            <div className={`space-y-1 px-2.5 flex-grow ${panelSize > 13 ? "pt-2 pb-2" : "pt-0 pb-4"} overflow-auto`}>
                <CurrentViewComponent />
            </div>
        </div>
    )
}

export default LibraryItems