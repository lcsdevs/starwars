import React from 'react';
import lodash from 'lodash';
import { StarshipDiv, StarshipName, StarshipDetails, CostStop } from './StarshipStyle';

export default function Starship({starship}){
  const supplyCost = _.isNaN(starship.supplyStopsStarships) ? "N/D" : starship.supplyStopsStarships;
  return (
    <>
      <StarshipDiv>
        <StarshipName>{starship.starship_class}</StarshipName>
        <CostStop>Stops: {supplyCost}</CostStop>
        <StarshipDetails>Name: {starship.name}</StarshipDetails>
        <StarshipDetails>Model: {starship.model}</StarshipDetails>
        <StarshipDetails>Capacity: {starship.cargo_capacity}</StarshipDetails>
        <StarshipDetails>Consumable: {starship.consumables}</StarshipDetails>
        <StarshipDetails>MGLT: {starship.MGLT}</StarshipDetails>
      </StarshipDiv>
    </>
  )
}
