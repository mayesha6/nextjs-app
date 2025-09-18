
const CatchAllRouteSlug = async ({params}:{params:Promise<{params:string[]}>}) => {
    const slugs = await params
    console.log("slugs: ", slugs)
    return (
        <div>
            <h1>Catch All Route Slug</h1>
        </div>
    );
};

export default CatchAllRouteSlug;