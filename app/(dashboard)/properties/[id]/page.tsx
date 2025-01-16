"use client"
import EnquiryForm from "@/app/ui/propertyInfo/enquiry_form";
import FAQ from "@/app/ui/propertyInfo/faq";
import PropertyBanner from "@/app/ui/propertyInfo/property_banner";
import ScrollingNav from "@/app/ui/propertyInfo/scrollingNavigationComponent";
import { useParams } from "next/navigation";

export default function Page() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <PropertyBanner />
            <ScrollingNav/>
            <EnquiryForm/>
            <FAQ />
            
        </div>
    );
}