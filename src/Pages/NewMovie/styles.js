import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 105px auto;

grid-template-areas: "header" "content";
`

export const Form = styled.form`
padding: 0 12.3rem;
margin: 3.8rem auto;

> header {

}
header h1 {
  color: ${({theme}) => theme.COLORS.WHITE_3};
  font-size: 3.6rem; 
  font-weight: 500;
  margin-top: 2.4rem;
}

 .input{
  display: flex;
  margin: 4rem 0;
  gap: 4rem;
 }

 .tags {
  display: flex;
  gap: 2.4rem;
  background: ${({theme}) => theme.COLORS.BACKGROUND_1000};
  padding: 1.6rem;
  border-radius: .8rem;
 }

 .button {
  display: flex;
  margin-top: 4rem;
  gap: 4rem;
 }

 .button Button {
  height: 5.6rem;
 }

 .button Button:nth-child(1) {
  background: ${({theme}) => theme.COLORS.BACKGROUND_1000};
  color: ${({theme}) => theme.COLORS.PINK};
 }

 .scrolldown {
  overflow-y: scroll;
 }

 .scrolldown::-webkit-scrollbar {
  background-color: transparent;
}

`