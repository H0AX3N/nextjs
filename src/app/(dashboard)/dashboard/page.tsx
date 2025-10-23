export default function Dashboard() {
    return (
        <div className="bg-purple-400 p-2 rounded-lg">
            <h1 className="text-2xl font-bold">Dashboard Page</h1>
        </div>
    )
}

// If I create a folder starting with _, it will be ignored by Next.js routing system
// so if I create a page.tsx inside that folder, it will not be treated as a route
// This is useful for creating components or utilities that should not be directly accessible via a URL