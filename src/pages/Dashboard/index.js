import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export default function Dashboard(){
    const {logout} = useContext(AuthContext)

    async function handleLogOut(){
        await logout()
    }
    
    return(
        <div>
            <h1>Página de Dashboard</h1>
            <button onClick={handleLogOut}>Sair</button>
        </div>
    )
}