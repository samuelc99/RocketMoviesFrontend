import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 105px auto;
grid-template-areas: "header" "content";

> main {
  grid-area: content;
  overflow-y: auto;
  padding: 4rem 12.3rem;

}

`

export const Content = styled.div`
margin: auto;
max-height: 58.1rem;
overflow-y: auto;

display: flex;
flex-direction: column;


div:nth-child(3) {
  display: flex;
  align-items: center;
  margin: 2.4rem 0;

  svg {
  color: ${({ theme }) => theme.COLORS.PINK};
  width: 2rem;
  height: 2rem;
  margin: .3rem 1rem 0 0;
}

}

h1 {
  color: ${({ theme }) => theme.COLORS.WHITE_1};

  font-family: Roboto Slab;
  font-size: 3.6rem;
  font-weight: 500;
  margin-right: 1.9rem;
}

> div {
  display: flex;
  gap: .8rem;
  align-items: center;
  margin-bottom: 4rem;

}

span {
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: .8rem;
}

svg {
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};

}

p {
  color: ${({ theme }) => theme.COLORS.WHITE_2};

  text-align: justify;
  font-family: Roboto Slab;
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 4rem;
}


img {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
 }
`