import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height:100vh;
    font-size: 14px;
  }
  #root{
    margin:0 auto;
    height:100%;
    width:100%
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #00b900; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #009700; 
}
`;

export default GlobalStyle;

export const FlexColumnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
