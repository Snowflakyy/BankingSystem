import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: hsl(0, 0%, 100%);
    --foreground: hsl(222.2, 47.4%, 11.2%);

    --muted: hsl(210, 40%, 96.1%);
    --muted-foreground: hsl(215.4, 16.3%, 46.9%);

    --popover: hsl(0, 0%, 100%);
    --popover-foreground: hsl(222.2, 47.4%, 11.2%);

    --border: hsl(214.3, 31.8%, 91.4%);
    --input: hsl(214.3, 31.8%, 91.4%);

    --card: hsl(0, 0%, 100%);
    --card-foreground: hsl(222.2, 47.4%, 11.2%);

    --primary: hsl(222.2, 47.4%, 11.2%);
    --primary-foreground: hsl(210, 40%, 98%);

    --secondary: hsl(210, 40%, 96.1%);
    --secondary-foreground: hsl(222.2, 47.4%, 11.2%);

    --accent: hsl(210, 40%, 96.1%);
    --accent-foreground: hsl(222.2, 47.4%, 11.2%);

    --destructive: hsl(0, 100%, 50%);
    --destructive-foreground: hsl(210, 40%, 98%);

    --ring: hsl(215, 20.2%, 65.1%);

    --radius: 0.5rem;
  }

  .dark {
    --background: hsl(224, 71%, 4%);
    --foreground: hsl(213, 31%, 91%);

    --muted: hsl(223, 47%, 11%);
    --muted-foreground: hsl(215.4, 16.3%, 56.9%);

    --accent: hsl(216, 34%, 17%);
    --accent-foreground: hsl(210, 40%, 98%);

    --popover: hsl(224, 71%, 4%);
    --popover-foreground: hsl(215, 20.2%, 65.1%);

    --border: hsl(216, 34%, 17%);
    --input: hsl(216, 34%, 17%);

    --card: hsl(224, 71%, 4%);
    --card-foreground: hsl(213, 31%, 91%);

    --primary: hsl(210, 40%, 98%);
    --primary-foreground: hsl(222.2, 47.4%, 1.2%);

    --secondary: hsl(222.2, 47.4%, 11.2%);
    --secondary-foreground: hsl(210, 40%, 98%);

    --destructive: hsl(0, 63%, 31%);
    --destructive-foreground: hsl(210, 40%, 98%);

    --ring: hsl(216, 34%, 17%);

    --radius: 0.5rem;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: 'Inter', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    :root {
      font-family: 'InterVariable', sans-serif;
    }
  }

  * {
    box-sizing: border-box;
    border-color: var(--border);
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, span, p {
    margin: 0;
    padding: 0;
    font-family: 'InterVariable', sans-serif;
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-feature-settings: "rlig" 1, "calt" 1;
  }
`;

// export const GlobalStyles = createGlobalStyle`
//     html,
//     body {
//         padding: 0;
//         margin: 0;
//         scroll-behavior: smooth;
        
//     }


//     a {
//         display: inline-block;
//         color: inherit;
//         text-decoration: none;
//     }

//     * {
//         box-sizing: border-box;

//     } 

//     h1, h2, h3, h4, h5, span, p {
//         margin: 0;
//         padding: 0;
//         font-family: 'InterVariable', sans-serif;
//     }

// :root { font-family: 'Inter', sans-serif; }
// @supports (font-variation-settings: normal) {
//   :root { font-family: 'InterVariable', sans-serif; }
// }


    
// `;
