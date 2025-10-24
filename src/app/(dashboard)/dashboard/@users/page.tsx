import Link from "next/link";

export default function Users() {
    return (
        <Link href={'/subtitles'} className="block p-4 m-4 rounded-lg bg-neutral-300 text-black">
            Users Page
        </Link>
    )
}