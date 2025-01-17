
import PropertyListings from "@/app/ui/properties/server_components/property_listing";
import Sidebar from "@/app/ui/properties/sidebar";
import TopBar from "@/app/ui/properties/topbar";

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