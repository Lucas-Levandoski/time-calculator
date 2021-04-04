import * as math from 'mathjs';

export function EquationToSeconds2(operations: string[]) {
  let record = '(';
  let equation = '';

  operations.forEach((operation) => {
    const operationChar = operation.substring(operation.length - 1, operation.length);
    const value = +operation.substring(0, operation.length - 1);

    switch (operationChar) {
      case 'd':
        record += ` +${value * 86400} `;
        break;
      case 'h':
        record += ` +${value * 3600} `;
        break;
      case 'm':
        record += ` +${value * 60} `;
        break;
      case 's':
        record += ` +${value} `;
        break;
      default:
        equation += ` ${record}) ${operationChar} `;
        record = '(';
        break;
    }
  });

  equation += `${record})`;

  return math.evaluate(equation);
}

export default function EquationToSeconds(equation: string) {
  let equationToRun = equation;

  equationToRun = equationToRun.replaceAll('d', '*86400');
  equationToRun = equationToRun.replaceAll('h', '*3600');
  equationToRun = equationToRun.replaceAll('m', '*60');
  equationToRun = equationToRun.replaceAll('s', '*1');

  return math.evaluate(equationToRun);
}
