import styled from 'styled-components';
import { pixelToRem } from '../../styles/globals';

export const BodyStyled = styled.div`
  width: 100vw;
  background-color: #4F4F4F;
`;

export const BodyContent = styled.div`
  padding: ${pixelToRem(64)} ${pixelToRem(64)};

  .input-distance{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .spaceship-content{
      padding-top: ${pixelToRem(32)};
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

  @media (min-width:900px) {
    padding: ${pixelToRem(64)} ${pixelToRem(64)};

    .input-distance{
      display: grid;
      grid-template-columns: repeat(2, 150px);
      gap: 128px;
      align-content: center;
      justify-content: center;
    }

    .spaceship-content{
      padding-top: ${pixelToRem(32)};
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const InputField = styled.input`
  height: ${pixelToRem(32)};
  width: ${pixelToRem(250)};
  outline: none;
  padding: ${pixelToRem(8)} ${pixelToRem(8)};
  border-radius: ${pixelToRem(8)};
`;

export const ButtonSearch = styled.button`
  height: ${pixelToRem(32)};
  width: ${pixelToRem(250)};
  margin-top: ${pixelToRem(8)};
  border-radius: ${pixelToRem(8)};
  background-color: #242424;

  font-size: ${pixelToRem(16)};
  line-height: ${pixelToRem(16)};
  font-family: 'Pathway Gothic One', sans-serif;
  color: #FFDD00;

  cursor: pointer;


  @media (min-width:900px) {
    width: ${pixelToRem(100)};
    margin-top: ${pixelToRem(0)};
  }
`;

export const FooterBody = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: #242424;

  color: #FFF;

  ul {
      display: flex;
      flex-direction:row;
      justify-content: center;
      padding-left: ${pixelToRem(10)};
      list-style-type:none;
  }

  li {
    padding: ${pixelToRem(8)};
    font-size: ${pixelToRem(16)};
    cursor: pointer;

    .active{
      background-color: #000;
    }
  }

    @media (min-width:900px) {
    height: ${pixelToRem(64)};

    ul {
      padding: ${pixelToRem(8)};
    }
  }
`;
