import styled from 'styled-components';
import {pixelToRem} from '../../styles/globals';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: ${pixelToRem(128)};
  background-color: #242424;

  img{
    width: ${pixelToRem(128)};
    height: ${pixelToRem(128)};
  }

  @media (min-width:900px) {
    height: ${pixelToRem(300)};
      img{
        width: ${pixelToRem(256)};
        height: ${pixelToRem(256)};
      }
  }

`;
