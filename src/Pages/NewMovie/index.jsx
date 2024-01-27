import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { AiOutlineArrowLeft} from 'react-icons/ai'
import { Header } from "../../Componentes/Header"
import { Button } from "../../Componentes/Button"
import { ButtonText } from "../../Componentes/ButtonText"
import { Input } from "../../Componentes/Input"
import { Textarea } from "../../Componentes/Textarea"
import { Section } from "../../Componentes/Section"
import { NewItem } from "../../Componentes/NewItem"

import { Container, Form } from "./styles";

export function NewMovie() {

  const [title, setTitle] = useState("")
  const [rating, setRatings] = useState(0);
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
    
  }

  async function handleAddMovies() {

    if (!title) {
      return alert("Digite o titulo do filme!");
    }

    if (!rating) {
      return alert("Digite a sua avaliação do filme!");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio!"
      );
    }


    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    })

    alert("Filme adicionado com sucesso!")
    navigate("/")
  }


  return(
    <Container>
      <Header/>
      <main>
        <Form>
              <ButtonText 
              title="Voltar" 
              icon={AiOutlineArrowLeft}
              onClick={handleBack}
              />
          <div className='scrolldown'>
              <header>
                <h1>Novo filme</h1>
              </header>

              <div className="input">

                <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
                />


                <Input 
                placeholder="Sua nota (de 0 a 5)"
                type="number"
                onChange={(e) => setRatings(e.target.value)}
                />
              </div>

              <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
              />


              <Section title="Marcadores">
                <div className="tags">
                  {
                    tags.map((tag, index) => (
                      <NewItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}/>
                    ))
                  }

                  <NewItem 
                  isNew 
                  placeholder="Novo marcador" 
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                  />
                </div>
              </Section>

              <div className="button">
                <Button title="Excluir filme" />

                <Button 
                title="Salvar alteração"
                onClick={handleAddMovies}
                />
              </div>
          </div>

        </Form>
      </main>
    </Container>
  )
} 