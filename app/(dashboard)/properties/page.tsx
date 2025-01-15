"use client"
import CitySelector from "@/app/ui/properties/city_selector";
import PropertyCard from "@/app/ui/properties/property_card";
import PropertyListings from "@/app/ui/properties/property_listings";
import SearchBar from "@/app/ui/properties/searchbar";
import Sidebar from "@/app/ui/properties/sidebar";
import { MapPin, Filter, SlidersHorizontal, ListFilter } from "lucide-react"
import { useState } from "react";

export default function Page() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCity, setSelectedCity] = useState('');


    return (
        <div>
            <div className="p-1 border-b-[1px] border-gray-200 ">
                <div className="mx-72 flex justify-start items-center ">
                    <div className="flex flex-1 justify-start items-center ">
                        <div className="flex gap-1 p-3 border-[1px] rounded-md m-2 hover:cursor-pointer " onClick={() => setIsOpen(true)}>
                            <MapPin size={20} color="#374151" />
                            <p>{selectedCity}</p>
                        </div>
                        <div className="w-[30%]  border-[1px] rounded-md">
                            <SearchBar />
                        </div>
                        <div className="flex gap-1 p-3 border-[1px] rounded-md m-2">
                            <Filter size={20} color="#374151" />
                            <p>Filters</p>
                        </div>
                        <div className="flex gap-1 p-3 border-[1px] rounded-md my-2">
                            <SlidersHorizontal size={20} color="#374151" />
                            <p>Commute Search</p>
                        </div>
                    </div>
                    <div className="flex gap-1 p-3 border-[1px] rounded-md my-2">
                        <ListFilter size={20} color="#374151" />
                        <p>Sort by</p>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <Sidebar />
                <PropertyListings />
            </div>
            <CitySelector
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSelectedCity={(city: string) => {
                    setSelectedCity(city)
                    setIsOpen(false)
                }}
            />
        </div>
    );
}