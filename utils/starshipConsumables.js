import converterHours from './converterHours';

export default function starshipConsumables(consumables, inputDistance, mglt) {
  var distanceMed = inputDistance / mglt;
  var consumePerHour = converterHours(consumables);
  var supplyStops = Math.floor(distanceMed / consumePerHour);
  return supplyStops;
}
