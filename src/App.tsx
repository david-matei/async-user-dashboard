import useFetch from "./fetch.tsx";
import {useState} from "react";
import UserSelect from "./UserSelect.tsx";
import UserInfo from "./UserInfo.tsx";
import PostList from "./PostList.tsx";

type User = {
  id: number
  name: string
  username: string
  email: string
}

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const App = () => {
  const { data: users, loading: loadingUsers, error: errorUsers } =
      useFetch<User[]>("https://jsonplaceholder.typicode.com/users")

  const [selectedUserId, setSelectedUserId] = useState(1)
  const { data: posts, loading: loadingPosts, error: errorPosts } =
      useFetch<Post[]>(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`
      )

  if (loadingUsers) return <p>loading...</p>
  if (errorUsers) return <p>failed to load users</p>
  if (!users) return <p>no data found</p>
  const selectedUserData = users.find(user => user.id === selectedUserId)
  const selectedUserPostNumber = posts?.length

  return (
      <>
        <UserSelect users={users} value={selectedUserId} onChange={setSelectedUserId}/>
        <UserInfo user={selectedUserData} postsCount={selectedUserPostNumber}/>
        <PostList posts={posts ?? []} loading={loadingPosts} error={errorPosts}/>
      </>
  )
}

export default App