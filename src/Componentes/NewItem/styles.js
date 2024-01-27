import styled from "styled-components";

export const Container = styled.div`
display: flex;
font-size: 16px;
font-weight: 400;
background-color: ${({ $isNew, theme }) => ($isNew ? 'transparent' : theme.COLORS.BACKGROUND_700)};
color: ${({ theme }) => theme.COLORS.GRAY_2};
border: ${({  $isNew, theme }) => ($isNew ? `2px dashed ${theme.COLORS.GRAY_2}` : 'none')};
border-radius: 1rem;

> button {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  padding-right: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};
}

svg {
  width: 2.2rem;
  height: 2.4rem;
}

> input {
  height: 5.6rem;
  min-width: ${({ $isNew }) => ($isNew ? '14.2rem' : '7.5rem')};
  max-width: ${({ $isNew }) => ($isNew ? '40rem' : '40rem')};
  padding-left: 1.6rem;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE_3};
  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }
}
`
