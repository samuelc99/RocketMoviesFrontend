
import { Container } from "./styles";
import { Tag } from "../Tag"
import {Rating} from '../Rating'

export function MyMovies({ data, ...rest}) {


  return(
    <Container {...rest}>

      
        <h1> {data.title} </h1> 
          <Rating grade={data.rating} />

          <p>{data.description}</p>

          {
            data.movie_tags && 
            <footer>
              { data.movie_tags.map((tag) => (
                <Tag 
                key={tag.id}
                title={tag.name} 
                color="#454249"  
                />
              ))}
            </footer>
          }

    </Container>
  )
}