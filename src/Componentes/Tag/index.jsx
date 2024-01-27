import { Container } from "./styles";

export function Tag({ title, color = 'lightgray', ...rest }) {
  return(
    <Container style={{ backgroundColor: color }} {...rest} >
      {title}
    </Container>
  )
}