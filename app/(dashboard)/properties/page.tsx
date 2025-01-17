"use client"
import CitySelector from "@/app/ui/properties/city_selector";
import PropertyCard from "@/app/ui/properties/property_card";
import PropertyListings from "@/app/ui/properties/property_listings";
import Sidebar from "@/app/ui/properties/sidebar";
import TopBar from "@/app/ui/properties/topbar";
import { useState } from "react";

export default function Page() {


    return (
        <div>
            <TopBar />
            <div className="flex ">
                <div className="hidden lg:block"><Sidebar /></div>
                <PropertyListings />
            </div>
        </div>
    );
}