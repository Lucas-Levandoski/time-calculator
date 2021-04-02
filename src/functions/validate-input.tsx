export default function ValidateInput(operations: string[]) {
  let mistakenOperation;

  operations.every((operation) => {
    const operationChar = operation.substring(operation.length - 1, operation.length);
    const value = +operation.substring(0, operation.length - 1);
    const operationOptions = ['d', 'h', 'm', 's', '+', '-'];

    if (!value && !operationOptions.includes(operationChar)) {
      mistakenOperation = operation;
      return false;
    }

    return true;
  });

  return mistakenOperation || null;
}
