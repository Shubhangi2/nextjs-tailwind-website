import NavBar from "@/components/navbar"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <NavBar/>
            <main>{children}</main>
        </section>
    );
}