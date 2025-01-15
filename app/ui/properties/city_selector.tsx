import { X } from "lucide-react";
import { useState } from "react";

interface CityPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectedCity: (city: string) => void;
}

const cities = [
    "Mumbai",
    "Pune",
    "Delhi",
    "Noida",
    "Gurugram",
    "Lucknow",
    "Hyderabad",
    "Chennai",
    "Bangalore",
    "Kochi",
    "Kolkata",
    "Dubai",
    "Vancouver",
    "Ahmedabad",
    "Calicut",
    "Coimbatore",
    "Goa",
    "Nagpur",
    "Thrissur",
    "Trivandrum",
];

const CitySelector = ({ isOpen, onClose, onSelectedCity }: CityPopupProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-6"
            onClick={onClose}
        >
            <div
                className="w-[50%] bg-white rounded-xl items-start justify-center overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Popular Cities</h2>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
                <div className="p-4">
                    <div className="grid grid-cols-4 gap-4">
                        {cities.map((city, index) => (
                            <div
                                key={index}
                                onClick={() => onSelectedCity(city)}
                                className="border rounded-lg px-4 py-3 cursor-pointer hover:border-orange-500 transition-colors"
                            >
                                <p className="text-gray-800 text-sm">{city}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitySelector;
