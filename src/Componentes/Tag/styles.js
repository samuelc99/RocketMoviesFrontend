import styled from "styled-components";

export const Container = styled.span`
font-size: 1.2rem;
padding: 5px 16px;
border-radius: 5px;
margin-right: .8rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
color: ${({theme}) => theme.COLORS.WHITE_2};
`