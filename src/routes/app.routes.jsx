import { Routes, Route, Navigate } from 'react-router-dom'

import { NewMovie } from '../Pages/NewMovie'
import { Preview } from '../Pages/Preview'
import { Home } from '../Pages/Home'
import { Perfil } from '../Pages/Perfil'


export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/NewMovie" element={<NewMovie/>}/>
      <Route path="/Preview/:id" element={<Preview/>}/>
      <Route path="/Perfil" element={<Perfil/>}/>

      <Route path="*" element={<Navigate to="/"/>}/>

    </Routes>
  )
}