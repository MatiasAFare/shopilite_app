// This is a simple example of a page that fetches data from an API and renders it.
export default async function Page() {
    let data = await fetch('https://shopilitebackend.vercel.app/get_products')
    let posts = await data.json()
    return (
        <ul>
            {posts.map((post) => (
                <li key={post._id.$oid}>{JSON.stringify(post)}</li>
            ))}
        </ul>
    )
}