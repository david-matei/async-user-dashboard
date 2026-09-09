type User = {
    id: number
    name: string
    username: string
    email: string
}
type UserInfoProps = {
    user: User | undefined
    postsCount: number | undefined
}

const UserInfo = ({user, postsCount}: UserInfoProps) => {
    if (!user) return <p>No user selected.</p>
    return (
        <>
            <p>User Name: {user.name}</p>
            <p>User username: {user.username}</p>
            <p>User Email: {user.email}</p>
            <p>Posts: {postsCount ?? 0}</p>
        </>
    )
}

export default UserInfo