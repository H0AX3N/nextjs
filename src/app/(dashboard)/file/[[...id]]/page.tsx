export default async function MultiDashboard({ params } : { params : Promise<{ id? : string[] }> }) {

    const { id } = await params;
    console.log(id)
    return (
        <>
            <p>Page id: { id?.join('/') }</p>
        </>
    )
}