import styled from "styled-components";
import backgroundImg from "../../assets/something.png"

export const Container = styled.div`
height: 100vh;


display: flex;
align-items: stretch;
`

export const Form = styled.form`
padding: 0 13.5rem;

display: flex;
flex-direction: column;
justify-content: center;

> h1 {
    color: #FF859B;

    font-size: 48px;
    font-weight: 700;
}

> p {
    color: #CAC4CF;
    font-size: 14px;
    font-weight: 400;


}
> h2 {
    position: relative;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    font-size: 24px;
    font-weight: 500;
    margin: 4.8rem 0;
    
    
}

svg {
  margin-left: 1.2rem;
}

> Button {
  margin: 2.4rem 0 4.2rem;
}

> a {
    color: ${({ theme }) => theme.COLORS.PINK};
    
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }

  
  `
  export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  `