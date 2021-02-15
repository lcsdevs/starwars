import moment from 'moment';

export default function converterHours(consumables){
  const [date, unitTime] = consumables.split(" ");
  return moment.duration(date,unitTime).asHours();
}
