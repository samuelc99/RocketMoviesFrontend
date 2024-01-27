
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
            data.tags && 
            <footer>
              { data.tags.map((tag) => (
                <Tag 
                key={tag.id}
                title={tag.name} 
                color="#d3719c"  
                />
              ))}
            </footer>
          }

    </Container>
  )
}