import styled from 'styled-components';
import { pixelToRem } from '../../styles/globals';

export const StarshipDiv = styled.div`
  border-radius: ${pixelToRem(8)};
  background-color: #242424;
  margin: ${pixelToRem(8)};

  height: ${pixelToRem(264)};
  width: ${pixelToRem(220)};

   @media (min-width:900px) {
     height: ${pixelToRem(264)};
     width: ${pixelToRem(264)};
   }
`;

export const StarshipName = styled.h1`
  color: #FFDD00;
  font-size: ${pixelToRem(16)};
  padding: ${pixelToRem(16)} ${pixelToRem(8)} ${pixelToRem(8)} ${pixelToRem(8)};
  text-align: center;
`;

export const StarshipDetails = styled.h4`
  color: #FFDD00;
  font-size: ${pixelToRem(12)};
  padding: ${pixelToRem(2)} ${pixelToRem(16)} ${pixelToRem(4)};
  text-align: left;

  @media (min-width:900px) {
    padding: ${pixelToRem(4)} ${pixelToRem(16)} ${pixelToRem(8)};
  }
`;

export const CostStop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFDD00;
  color: #000;
  height: ${pixelToRem(64)};
  width: ${pixelToRem(128)};
  border-radius: ${pixelToRem(8)};
  margin-left: ${pixelToRem(48)};
  margin-bottom: ${pixelToRem(16)};
  text-align: center;

   @media (min-width:900px) {
     margin-left: ${pixelToRem(64)};
  }
`;
