import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const filters = [
    "Price",
    "Jewellery Type",
    "Product",
    "Brand",
    "Gender",
    "Purity",
    "Occasion",
    "Metal",
    "Diamond Clarity",
];

export default function FilterSidebar({clickHandle}) {
    const [openFilters, setOpenFilters] = useState(filters.map(() => false));

    const toggleFilter = (index) => {
        setOpenFilters((prev) => {
            const newFilters = [...prev];
            newFilters[index] = !newFilters[index];
            return newFilters;
        });
    };

    return (
        <div className="fixed left-5 top-10 w-90 bg-white shadow-xl rounded-2xl p-5 border z-999">
            <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-semibold text-[#5E2D29]">Filter By</h2>
                <button className="text-gray-500 hover:text-gray-800">
                    <X className="w-6 h-6 cursor-pointer" onClick={clickHandle}/>
                </button>
            </div>

            
            <div className="mt-2 scrollbar-thin scrollbar-thumb-gray-300">
                {filters.map((filter, index) => (
                    <div key={index} className=" py-3 cursor-pointer" onClick={() => toggleFilter(index)}>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">{filter}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openFilters[index] ? "rotate-180" : ""}`} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 flex gap-2 ">
                <button className=" py-2 px-3 border border-[#5E2D29] text-[#5E2D29] rounded-full hover:bg-[#5E2D29] hover:text-white transition cursor-pointer">
                    Clear Filters
                </button>
                <button className="py-3 px-4 bg-[#842B26] text-white rounded-full flex items-center justify-center  hover:bg-[#5E2D29] transition cursor-pointer">
                    Show Result (3,105) ➤
                </button>
            </div>
        </div>
    );
}
