import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import Header from "../../components/Header"

export default function Dashboard(){
    const {logout} = useContext(AuthContext)

    async function handleLogOut(){
        await logout()
    }
    
    return(
        <div>
            <Header/>

            <h1>Página de Dashboard</h1>
            <button onClick={handleLogOut}>Sair</button>
        </div>
    )
}