import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        background-color: #f9faff;
        line-height: 1.2;

        /*min-width: 360px;*/
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};

    }

    section {
        padding-bottom: 144px;
        //TODO question for mentor 
    }

     
    h3 {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 1px;
    }

    p {
        font-size: 11px;
        line-height: 1.4;
        font-weight: 400;
        letter-spacing: 0;
        color: #fff;
    }
`