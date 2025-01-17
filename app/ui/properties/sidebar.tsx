import React, { useState } from 'react';
import { X, Home, Wallet, Building, Key, User, Clock, Package, LucideIcon } from 'lucide-react';

type FilterCategory =
    | 'budget'
    | 'unitType'
    | 'purchaseType'
    | 'possession'
    | 'listedBy'
    | 'propertyAge'
    | 'amenities';

type FilterState = {
    [K in FilterCategory]?: string[];
};

interface FilterSectionProps {
    title: string;
    options: string[];
    category: FilterCategory;
    icon: LucideIcon;
    selectedFilters: FilterState;
    onFilterChange: (category: FilterCategory, value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
    title,
    options,
    category,
    icon: Icon,
    selectedFilters,
    onFilterChange
}) => (
    <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
            <Icon className="text-gray-600" size={20} />
            <h3 className="font-medium">{title}</h3>
        </div>
        {options.map(option => (
            <label key={option} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={selectedFilters[category]?.includes(option) ?? false}
                    onChange={() => onFilterChange(category, option)}
                    className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-sm">{option}</span>
            </label>
        ))}
    </div>
);

const FilterSidebar: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        budget: ['40 lacs - 70 lacs'],
        unitType: ['1 BHK']
    });

    const filterOptions: Record<FilterCategory, string[]> = {
        budget: [
            'Under 40 lacs',
            '40 lacs - 70 lacs',
            '70 lacs - 1 Crore',
            '1 Crore - 2 Crore',
            'Above 2 Crore',
            'On request/Coming Soon'
        ],
        unitType: [
            '1 BHK',
            '2 BHK',
            '3 BHK',
            '4 BHK',
            '4+ BHK'
        ],
        purchaseType: [
            'New Projects',
            'Resale'
        ],
        possession: [
            'Ready to Move',
            'In 1 Year',
            'In 2 Years',
            'In 3 Years',
            'After 3 Years'
        ],
        listedBy: [
            'Owner',
            'Agent',
            'Developer'
        ],
        propertyAge: [
            'Less than a Year',
            'Less than 2 Years',
            'Less than 3 Years',
            'Less than 4 Years'
        ],
        amenities: [
            'Parking',
            'Swimming Pool',
            'Lift',
            'Gated Community',
            'Gas Pipeline'
        ]
    };

    const handleFilterChange = (category: FilterCategory, value: string) => {
        setSelectedFilters(prev => ({
            ...prev,
            [category]: prev[category]?.includes(value)
                ? prev[category].filter(item => item !== value)
                : [...(prev[category] || []), value]
        }));
    };

    const removeFilter = (category: FilterCategory, value: string) => {
        setSelectedFilters(prev => ({
            ...prev,
            [category]: prev[category]?.filter(item => item !== value) || []
        }));
    };

    const resetFilters = () => {
        setSelectedFilters({});
    };

    const filterSections: Array<{
        title: string;
        category: FilterCategory;
        icon: LucideIcon;
    }> = [
            { title: 'Select your budget', category: 'budget', icon: Wallet },
            { title: 'Various unit types in Mumbai', category: 'unitType', icon: Home },
            { title: 'Purchase Type', category: 'purchaseType', icon: Building },
            { title: 'Possession', category: 'possession', icon: Key },
            { title: 'Listed By', category: 'listedBy', icon: User },
            { title: 'Age Of Property', category: 'propertyAge', icon: Clock },
            { title: 'Amenities', category: 'amenities', icon: Package }
        ];

    return (
        <div className="w-72 bg-white p-4 shadow-md border-[1px] max-h-[1200px] border-gray-200 overflow-y-scroll">
            {/* Header with selected filters */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium">Filters</h2>
                    {Object.keys(selectedFilters).length > 0 && (
                        <p

                            onClick={resetFilters}
                            className="hover:text-orange-600 text-orange-500 text-sm transition-colors duration-200"
                        >
                            Reset
                        </p>
                    )}
                </div>

                <div className="flex flex-wrap gap-2">
                    {Object.entries(selectedFilters).map(([category, values]) =>
                        values?.map(value => (
                            <div
                                key={`${category}-${value}`}
                                className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-sm"
                            >
                                <span>{value}</span>
                                <button
                                    onClick={() => removeFilter(category as FilterCategory, value)}
                                    className="ml-1"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {filterSections.map(section => (
                <div key={section.category} className='border-b-2 mb-5 border-gray-200'>
                    <FilterSection
                        key={section.category}
                        title={section.title}
                        options={filterOptions[section.category]}
                        category={section.category}
                        icon={section.icon}
                        selectedFilters={selectedFilters}
                        onFilterChange={handleFilterChange}
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterSidebar;