import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default GlobalStyle