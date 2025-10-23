export default function Dashboardlayout({
    children, 
    analytics, 
    users
}: {
    children: React.ReactNode, 
    analytics: React.ReactNode, 
    users: React.ReactNode
}) {
    return(
        <div className="bg-purple-600 p-2 rounded-lg">
            <h1 className="text-2xl font-bold">Dashboard Layout</h1>
            {children}
            {analytics}
            {users}
        </div>
    )
}