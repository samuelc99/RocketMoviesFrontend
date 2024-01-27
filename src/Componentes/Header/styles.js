import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
grid-area: header;

height: 10.5rem;
width: 100%;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

display: flex;
justify-content: space-between;
align-items: center;
gap: 6.4rem;

padding: 0 12.3rem;

background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

h1 {
  color: ${({ theme }) => theme.COLORS.PINK};

  font-size: 2.4rem;
  font-weight: 700;
}

button {
  position: absolute; 
  top: 5.5rem;
  right: 19.6rem;

  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.GRAY_2}; 
}
`

export const Profile = styled(Link)`
display: flex;
flex-shrink: 0;
text-decoration: none;

> img {
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  border: 1px solid #3E3B47;
}

> div {
  display: flex;
  flex-direction: column;
  margin-right: .9rem;
}

strong {
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  margin-top: 1.6rem;
  font-size: 1.4rem;
  font-weight: 700;
}


`


