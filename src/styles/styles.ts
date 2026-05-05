import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    :root {
        --header-height: 88px;
    }

    @font-face {
        font-family: "OneStoreMobileGothicTitleFont";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Title.woff") format("woff");
        font-weight: normal;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: "OneStoreMobileGothicBody";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Regular.woff") format("woff");
        font-weight: normal;
        font-display: swap;
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'OneStoreMobileGothicBody', sans-serif;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: var(--header-height);
    }


    body {
        margin:0;
        padding: var(--header-height) 0 0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
        scroll-snap-type: y mandatory;
    }

    a:hover {
        color: #000;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #000 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'OneStoreMobileGothicTitleFont', sans-serif;
        color: #000;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #000;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #000;

        :hover {
            color: #000;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
