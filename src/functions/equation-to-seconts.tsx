import * as math from 'mathjs';

export default function EquationToSeconds(operations: string[]) {
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
