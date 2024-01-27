import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`

main {
padding: 0 12.3rem                    ;
margin: auto;
max-height: 71.6rem;
overflow-y: scroll;
}

main::-webkit-scrollbar {
  background-color: transparent;
}

`
export const TitleAndButton = styled.div`
display: flex;
justify-content: space-between;
padding: 0 12.3rem ;
margin: 5rem 0 4rem ;
align-items: center;

p {
  color: ${({theme}) => theme.COLORS.WHITE_3};

  font-family: Roboto Slab;
  font-size: 32px;
  font-weight: 400;
}

`

export const AddMovie = styled(Link)`
max-width: 20.7rem;
background-color: ${({ theme }) => theme.COLORS.PINK};
color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

height: 4.8rem;
padding: 0 1.6rem;
border-radius: 1rem;
cursor: pointer;

font-weight: 500;
font-size: 16px;
font-feature-settings: 'liga' off;

display: flex;
align-items: center;
gap: .8rem;
text-decoration: none;

&:disabled {
  opacity: 0.5;
}

 svg {
 width: 2rem;
 height: 2rem;
}
`