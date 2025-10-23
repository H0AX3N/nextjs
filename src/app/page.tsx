import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="p-2 bg-amber-900">
            <h1 className="text-2xl font-bold">Root Layout</h1>
            <h1 className="text-2xl font-bold">Root Layout (Home)</h1>
            <nav className="bg-red-400 p-4 rounded-md">
                <ul className="flex gap-2">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
            <p>Welcome to the home page!</p>
        </div>
    );
}
