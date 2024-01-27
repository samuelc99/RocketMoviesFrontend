import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoAddSharp } from 'react-icons/io5'
import { api } from '../../services/api';

import { Header } from "../../Componentes/Header";
import { MyMovies } from "../../Componentes/MyMovies"
import { Section } from '../../Componentes/Section';

import { Container, TitleAndButton, AddMovie} from "./styles";


export function Home(){

  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/Preview/${id}`)
}
  
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])
 

  return(
    <Container>
          <Header onChange={(e) => setSearch(e.target.value)} />
          
        <TitleAndButton>
          <p>Meus filmes</p>
          <AddMovie to="/NewMovie">
            <IoAddSharp/> Adicionar filme
            </AddMovie>
        </TitleAndButton>


      <main>  

        <Section>
          {  
          notes && 
            notes.map(note => (
              <MyMovies 
                key={String(note.id)}
                data={note}
                onClick={() => handlePreview(note.id)}
              />
            ))
          }
        </Section>


      </main>
    </Container>
  )        
}