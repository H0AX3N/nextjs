import Link from "next/link";

export default function SettinsLayout({children}: {children: React.ReactNode}) {
    return(
        <div className="bg-blue-600 p-2 rounded-lg border">
            <h1 className="font-bold text-2xl">Settings Layout</h1>
            <div className="flex gap-2">
                <div className="w-1/4 h-[500px] bg-orange-300 p-2 rounded-lg">
                    <h2 className="text-xl font-bold text-black">Settings</h2>
                    <nav>
                        <ul className="flex flex-col gap-2">
                            <li className="bg-white p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-black">
                                <Link href="/settings">General</Link>
                            </li>
                            <li className="bg-white p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-black">
                                <Link href="/settings/profile">Profile</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    )
}