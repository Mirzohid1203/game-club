"use client"

import { usePathname } from "next/navigation"

function NavbarTitle() {
    const pathname = usePathname()
    let title: string

    if (pathname.startsWith("/dashboard/rooms")) title = "Xonalar"
    else title = "Asosiy"
    return (
        <header className="border-b-2 border-gray-200 px-6 py-4 ">
            <h2 className="text-3xl font-bold ">{title}</h2>
        </header>
    )
}

export default NavbarTitle