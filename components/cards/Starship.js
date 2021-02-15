import React from 'react';
import { StarshipDiv, StarshipName, StarshipDetails, CostStop } from './StarshipStyle';

export default function Starship({starship}){
  console.log(starship);
  return (
    <>
      <StarshipDiv>
        <StarshipName>{starship.starship_class}</StarshipName>
        <CostStop>Stops: {starship.MGLT}</CostStop>
        <StarshipDetails>Name: {starship.name}</StarshipDetails>
        <StarshipDetails>Model: {starship.model}</StarshipDetails>
        <StarshipDetails>Capacity: {starship.cargo_capacity}</StarshipDetails>
        <StarshipDetails>Consumable: {starship.consumables}</StarshipDetails>
        <StarshipDetails>MGLT: {starship.MGLT}</StarshipDetails>
      </StarshipDiv>
    </>
  )
}
