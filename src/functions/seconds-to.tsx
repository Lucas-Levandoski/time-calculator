import { ReturnTypes } from '../enums';
import EquationToSeconds from './equation-to-seconds';

function SecondsToDays(secontsTo: number) {
  let toDays = secontsTo;

  const days = Math.floor(toDays / 86400);
  toDays -= days * 86400;
  const hours = Math.floor(toDays / 3600);
  toDays -= hours * 3600;
  const minutes = Math.floor(toDays / 60);
  toDays -= minutes * 60;
  const seconds = toDays;
  return `${days}d${hours}h${minutes}m${seconds}s`;
}

function SecondsToHours(secontsTo: number) {
  let toHours = secontsTo;
  const hours = Math.floor(toHours / 3600);
  toHours -= hours * 3600;
  const minutes = Math.floor(toHours / 60);
  toHours -= minutes * 60;
  const seconds = toHours;
  return `${hours}h${minutes}m${seconds}s`;
}

function SecondsToMinutes(secontsTo: number) {
  let toMinutes = secontsTo;
  const minutes = Math.floor(toMinutes / 60);
  toMinutes -= minutes * 60;
  const seconds = toMinutes;
  return `${minutes}m${seconds}s`;
}

function SecondsToSeconds(secontsTo: number) {
  return `${secontsTo}s`;
}

export default function SecondsTo(equations: string[], resultType: ReturnTypes) {
  let result = '';

  switch (resultType) {
    case ReturnTypes.days:
      result = SecondsToDays(EquationToSeconds(equations));
      break;
    case ReturnTypes.hours:
      result = SecondsToHours(EquationToSeconds(equations));
      break;
    case ReturnTypes.minutes:
      result = SecondsToMinutes(EquationToSeconds(equations));
      break;
    case ReturnTypes.seconds:
      result = SecondsToSeconds(EquationToSeconds(equations));
      break;
    default:
  }

  return result;
}
