import { createGlobalStyle } from "styled-components"
import { Theme } from "./theme"

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }: { theme: Theme }) => theme.body};
        font-family: 'Montserrat', sans-serif;
        
    }
`

export default GlobalStyle
