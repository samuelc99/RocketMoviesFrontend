import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;

align-items: center;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.GRAY_2};

border-radius: 1rem;
margin-top: .8rem;


> input {
  height: 5.6rem;
  width: 100%;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;

  padding: 1.6rem ;
  color: ${({ theme }) => theme.COLORS.WHITE_2};
  background: transparent;
  border: none;
  outline: none;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    
  }

}
`