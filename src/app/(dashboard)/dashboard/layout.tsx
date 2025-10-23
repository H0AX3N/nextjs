export default function Dashboardlayout({children}: {children: React.ReactNode}) {
    return(
        <div className="bg-purple-600 p-2 rounded-lg">
            <h1 className="text-2xl font-bold">Dashboard Layout</h1>
            {children}
        </div>
    )
}