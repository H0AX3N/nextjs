import Link from "next/link";

export default function Login() {
    return (
        <>
            <h1 className="text-2xl font-bold">(Login Layout)</h1>
            <nav className="bg-red-500 p-4 mt-2 rounded-lg underline">
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                </ul>
            </nav>
            <div className="bg-purple-400 p-4 m-2 rounded-lg">
                <p>Login Page</p>
            </div>
        </>
    )
}