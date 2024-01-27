import { useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft} from 'react-icons/ai'
import { RiTimeLine } from 'react-icons/ri'

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api'
import { avatarPlaceholder } from "../../assets/avatar_placeholder"

import { Rating } from '../../Componentes/Rating'
import { Header } from '../../Componentes/Header'
import { Section } from '../../Componentes/Section'
import { Tag } from '../../Componentes/Tag'
import { ButtonText } from '../../Componentes/ButtonText'

import moment from "moment-timezone";

import { Container, Content } from './styles'

export function Preview() {
  const [data, setData] = useState(null);

  const { user } = useAuth()

  const params = useParams();
  const navigate = useNavigate()


  const avatarUrl = user.avatar ? 
  `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  const formattedDate = moment()
    .tz('America/Sao_Paulo')
    .format("DD/MM/YYYY HH:mm:ss");

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchMovies();
  }, []);

  return(
    <Container>
      <Header/>

      {
        data && 
          <main>
            <Content>
              <Section>
              <ButtonText 
              title="Voltar" 
              icon={AiOutlineArrowLeft}
              onClick={handleBack}
              />

                <div>
                  <h1>{data.title}</h1>              
                  <Rating grade={data.rating}/>
                </div>
                  
                </Section>

                <div>
                <img src={avatarUrl} alt={user.name} />
                  <span>Por {user.name}</span>
                  <RiTimeLine/>
                  <span>{formattedDate}</span>
          
                </div>
                
                {
                  data.tags &&
                    (<Section>
                      {
                        data.tags.map((tag) => (
                          <Tag 
                          key={String(tag.id)}
                          title={tag.name} 
                          color="#282124"  
                          />
                        ))
                      }     
                    </Section>)
                }

                <p>
                  {data.description} 
                </p>

              </Content>
            </main>   
      }

    </Container>
    
  )
}
