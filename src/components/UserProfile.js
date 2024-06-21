import { useAuth0 } from "@auth0/auth0-react"

export default function UserProfile(){
    const { user } = useAuth0()
    return (
        <>
            <img src={user?.picture}/>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
        </>
    )
}