import { useState } from "react";

const CategorieSection = () => {
    const categories = ["All", "Music", "Podcasts"];
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="flex gap-6 rounded-full w-fit -mb-5">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full text-xs font-medium transition-colors duration-200 ${cat === activeCategory
                        ? 'text-[#3babdb]'
                        : 'text-white '
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}

export default CategorieSection