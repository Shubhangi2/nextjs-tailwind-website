"use client"
import FAQ from "@/app/ui/propertyInfo/faq";
import { useParams } from "next/navigation";

export default function Page() {
    const { id } = useParams<{ id: string }>();
    return (
        <div><FAQ/></div>
    );
}