import { ViewType } from '~/types';
import SearchBar from './SearchBar';
import ViewTypeButton from './ViewTypeButton';
import { useUIPreferencesStore } from '~/store/useUIPreferencesStore';

interface SearchTogglePanelProps {

}

const SearchTogglePanel: React.FC<SearchTogglePanelProps> = ({ }) => {
    const { preferences: { panelSize } } = useUIPreferencesStore()


    return (
        <>
            <div className={`${panelSize < 12 ? "hidden" : ""} flex items-center justify-between relative px-4`}>
                {/* Search bar */}
                <SearchBar />

                {/* View Type Button */}
                <ViewTypeButton />
            </div>
        </>
    )
}

export default SearchTogglePanel