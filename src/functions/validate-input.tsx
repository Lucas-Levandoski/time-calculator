export const operationChars: string[] = ['+', '-', '*', '/', '(', ')'];
export const timeChars: string[] = ['d', 'h', 'm', 's'];

// export function ValidateInput(equation: string) {
//   let mistakenOperation;

//   const operations = equation.split('');

//   operations.every((operation) => {
//     const operationChar = operation;
//     const valueIsNan = Number.isNaN(+operation);

//     if (valueIsNan && !operationChars.includes(operationChar) && !timeChars.includes(operationChar)) {
//       mistakenOperation = operation;
//       return false;
//     }

//     return true;
//   });

//   return mistakenOperation || null;
// }

export function CheckDuplications(TimeString: string) {
  const chars = TimeString.split('');
  let hasDuplicates = null;

  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    const charsSoFar = chars.slice(i + 1, chars.length);

    if (charsSoFar.includes(char) && timeChars.includes(char)) {
      hasDuplicates = char;
      i = chars.length;
    }
  }

  return hasDuplicates;
}

export default function ValidateInput(equations: string[]) {
  let errorMessage = null;

  equations.every((equation) => {
    // check duplications like 15hh
    const duplication = CheckDuplications(equation);

    if (duplication) {
      errorMessage = `sentence (${equation}) has more than one (${duplication})`;
      return false;
    }

    equation.split('').forEach((char) => {
      if (!operationChars.includes(char) && !timeChars.includes(char) && !+char && char !== '0') {
        errorMessage = `character (${char}) on sentence (${equation}) is not accepted`;
      }
    });

    return true;
  });

  return errorMessage;
}
