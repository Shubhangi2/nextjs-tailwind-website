import NavBar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    );
}