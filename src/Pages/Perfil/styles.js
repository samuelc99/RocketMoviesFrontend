import styled from 'styled-components'

export const Container = styled.div`
header{
  width: 100%;
  height: 14.4rem;

  background: rgba(255, 133, 155, 0.05);
  padding: 6.4rem 0 0 16.8rem;
}

input svg {
    width: 20px;
    height: 18px;
    flex-shrink: 0;
    margin-left: 1.2rem;
  }

`

export const Form = styled.div`
  max-width: 40rem;
  margin: auto;



  .inputs svg {
    width: 20px;
    height: 18px;
    flex-shrink: 0;
    margin-left: 1.2rem;
  }

  div:nth-child(3){
    margin-top: 2.4rem;
  }

  > Button {
    margin-top: 2.4rem;
    opacity: 50%;
  }
`


export const Avatar = styled.div`
  position: relative;
  margin: -10rem auto 6.4rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: end;

  width: 186px;
  height: 186px;

> img {
margin: auto;
width: 186px;
height: 186px;
border-radius: 50%;
}

> label {
  width: 4.8rem;
  height: 4.8rem;
  background-color: ${({theme}) => theme.COLORS.PINK};

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: .4rem;
  right: 1rem;

  cursor: pointer;

  input {
    display: none;
  }

  svg {
  color: ${({ theme }) => theme.BACKGROUND_800};
  width: 2rem;
  height: 2rem;
}
}


`