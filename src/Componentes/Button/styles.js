import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.PINK};
color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

height: 4.8rem;
border: none;
padding: 0 1.6rem;
border-radius: 1rem;
cursor: pointer;

font-family: Roboto Slab;
font-weight: 500;
font-size: 16px;
font-feature-settings: 'liga' off;

display: flex;
align-items: center;
justify-content: center;
gap: .8rem;

&:disabled {
  opacity: 0.5;
}
`