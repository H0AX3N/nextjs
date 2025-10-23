export default async function SingleBlog({ params } : { params : Promise<{id : string}> }) {
    
    const { id } = await params;

    return (
        <>
            <h1 className="p-2">Blog Id: {id}</h1>
        </>
    )   
}