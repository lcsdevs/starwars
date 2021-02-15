import React from 'react';
import { HeaderStyled } from './HeaderStyle';
import logo from '../../assets/logo.svg';

export default function Header(){
  return(
    <HeaderStyled>
      <img src={logo} alt=""/>
    </HeaderStyled>
  );
}
