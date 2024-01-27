import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 27.4rem;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.WHITE_3};
border: none;
resize: none;
margin-bottom: 4rem;
border-radius: 1rem;
padding: 1.6rem;

font-family: Roboto;
font-size: 16px;
font-weight: 400;


&::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_3};
}
`