import Link from "next/link";

export default function Analytics() {
    return (
        <Link href={"/dashboard/revenue"} className="block p-4 m-4 bg-neutral-300 rounded-lg text-black">
            Analytics Page
        </Link>
    )
}