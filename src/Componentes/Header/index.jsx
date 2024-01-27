import { Container, Profile } from "./styles";
import { Input } from "../Input"
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { avatarPlaceholder } from "../../assets/avatar_placeholder"
import { useNavigate } from "react-router-dom";


export function Header({ ...props }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input  placeholder="Pesquisar pelo título" {...props} />

      <Profile to="/Perfil">

      <div>
        <strong>{user.name} </strong>      
      </div>
      <img src={avatarUrl} alt="Foto do usuário" />
      </Profile>
      <button onClick={handleSignOut} >sair </button>
    </Container>
  )
}