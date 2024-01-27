import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../Pages/SignIn'
import { SignUp } from '../Pages/SignUp'



export function AuthRoutes(){
  const user = localStorage.getItem("@rocketMovie:user");

  return(
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>

     {!user && <Route path="*" element={<Navigate to="/"/>}/>}
    </Routes>
  )
}