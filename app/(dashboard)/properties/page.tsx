"use client"
import SearchBar from "@/app/ui/properties/searchbar";
import Sidebar from "@/app/ui/properties/sidebar";

export default function Page() {
    return (
        <div>
            <div className="flex justify-center items-center ">

                <div className="w-[30%] shadow-sm">
                    <SearchBar />
                </div>
            </div>
            <Sidebar />
        </div>
    );
}