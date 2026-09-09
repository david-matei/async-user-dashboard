import PostCard from "./PostCard.tsx";

type Post = {
    userId: number
    id: number
    title: string
    body: string
}

type PostListProps = {
    posts: Post[]
    loading: boolean
    error: Error | null
}
const PostList = ({posts, loading, error}: PostListProps) => {
    if (loading) return <p>Loading posts...</p>
    if (error) return <p>Failed to load posts.</p>
    if (!posts.length) return <p>No posts found.</p>
    return (
        <>
            {
                posts.map(post => <PostCard key={post.id} post={post} />)
            }
        </>
    )
}

export default PostList