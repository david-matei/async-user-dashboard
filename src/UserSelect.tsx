type User = {
    id: number
    name: string
    username: string
    email: string
}

type UserSelectProps = {
    users: User[]
    value: number
    onChange: (id: number) => void
}

function UserSelect({ users, value, onChange }: UserSelectProps) {
    return (
        <select
            value={value}
            onChange={e => onChange(Number(e.target.value))}
        >
            {users.map(user => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>
    )
}

export default UserSelect