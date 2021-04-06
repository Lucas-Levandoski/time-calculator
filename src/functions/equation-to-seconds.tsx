import * as math from 'mathjs';
import SplitEquation from './split-equation';
import { operationChars } from './validate-input';

function TimeStringToNumber(timeString: string) {
  let result = timeString;

  if (+result) {
    return math.evaluate(result);
  }

  result = result.replaceAll('d', '*86400+');
  result = result.replaceAll('h', '*3600+');
  result = result.replaceAll('m', '*60+');
  result = result.replaceAll('s', '*1+');

  return math.evaluate(result.substr(0, result.length - 1));
}

export default function EquationToSeconds(splitedEquations: string[]) {
  const splitedEquation = splitedEquations;

  splitedEquation.forEach((item, index) => {
    if (!operationChars.includes(item)) {
      splitedEquation[index] = TimeStringToNumber(item);
    }
  });

  return Math.round(math.evaluate(splitedEquation.join('')));
}
