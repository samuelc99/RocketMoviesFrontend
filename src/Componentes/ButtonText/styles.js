import styled from "styled-components";


export const Container = styled.button`
background: none;
color: ${({ theme }) => theme.COLORS.PINK};

display: flex;
align-items: center;
text-decoration: none;
border: none;

font-size: 16px;
cursor: pointer;


svg {
  width: 1.6rem;
  height: 1.6rem;
  margin-right: .8rem;
}
`