type Post = {
    userId: number
    id: number
    title: string
    body: string
}
type PostCardProps = {
    post: Post
}

const PostCard = ({post}: PostCardProps) => {
    return <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
}

export default PostCard