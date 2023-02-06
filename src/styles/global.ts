import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.white};
    max-width: 412px;
    margin: 0 auto;
  }

  body, button, input, textarea {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  p {
    font-family: 'Nunito', sans-serif;
  }
`
