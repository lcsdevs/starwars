import { createGlobalStyle } from 'styled-components';

export function pixelToRem(pixels){
 return `${(1 / 16 * pixels)}rem`;
}
export default createGlobalStyle`
  body {
    font-family: 'Pathway Gothic One', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }
  h1{
    font-size: ${pixelToRem(16)};
  }
`;
