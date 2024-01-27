import { useState } from 'react'
import { FiLock, FiMail} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form, Background } from "./styles"

import { Input } from '../../Componentes/Input'
import { Button } from '../../Componentes/Button'

import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }


  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input 
        placeholder="E-mail" 
        type="text" 
        icon={FiMail} 
        onChange={e => setEmail(e.target.value)}
        />
        
        
        
        
        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />



        <Button 
        title="Entrar"
        onClick={handleSignIn}
        />

        <Link to="register">Criar conta</Link>
      </Form>

      <Background/>
    </Container>
  )
}  