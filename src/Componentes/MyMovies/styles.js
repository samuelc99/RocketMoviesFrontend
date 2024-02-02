import styled from "styled-components"

export const Container = styled.button`
width: 100%;
display: flex;
padding: 3.2rem;
flex-direction: column;
margin-bottom: 2.4rem;
text-decoration: none;
border: none;
cursor: pointer;

border-radius: 1.6rem;
background: rgba(255, 133, 155, 0.05);

> div {
text-align: left;
}

h1 {
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-family: Roboto Slab;
  font-size: 2.4rem;
  font-weight: 700;
}


  svg {
  color: ${({ theme }) => theme.COLORS.PINK};
  width: 1.2rem;
  height: 1.2rem;
  margin: .8rem .6rem 0 0;
}

p {
  width: 100%;
  height: 5.3rem;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
  
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin: 1.5rem 0;

  display: block;
  display: -webkit-box;
  max-height: 2.4em;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}





> footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }


`