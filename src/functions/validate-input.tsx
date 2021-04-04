export default function ValidateInput(equation: string) {
  let mistakenOperation;

  const operations = equation.split('');

  operations.every((operation) => {
    const operationChar = operation;
    const valueIsNan = Number.isNaN(+operation);
    const operationOptions = ['d', 'h', 'm', 's', '+', '-', '(', ')', '*', '/'];

    if (valueIsNan && !operationOptions.includes(operationChar)) {
      mistakenOperation = operation;
      return false;
    }

    return true;
  });

  return mistakenOperation || null;
}
