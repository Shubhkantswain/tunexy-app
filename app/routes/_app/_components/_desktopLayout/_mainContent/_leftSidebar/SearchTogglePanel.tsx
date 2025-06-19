import { ViewType } from '~/types';
import SearchBar from './SearchBar';
import ViewTypeButton from './ViewTypeButton';
import { usePanelSizeStore } from '~/store/usePanelSizeStore';

interface SearchTogglePanelProps {
    view: ViewType;
    setView: React.Dispatch<React.SetStateAction<ViewType>>;
}

const SearchTogglePanel: React.FC<SearchTogglePanelProps> = ({ view, setView }) => {
    const {panelSize} = usePanelSizeStore()

    return (
        <>
            <div className={`${panelSize < 12 ? "hidden": ""} flex items-center justify-between relative px-4`}>
                {/* Search bar */}
                <SearchBar />

                {/* View Type Button */}
                <ViewTypeButton view={view} setView={setView} />
            </div>
        </>
    )
}

export default SearchTogglePanel