export const operationChars: string[] = ['+', '-', '*', '/', '(', ')'];
export const timeChars: string[] = ['d', 'h', 'm', 's'];

function CheckDuplications(TimeString: string) {
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

function CheckCharacterAcceptance(equation: string) {
  let hasInvalidChar = null;

  const chars = equation.split('');

  chars.forEach((char) => {
    if (!operationChars.includes(char) && !timeChars.includes(char) && !+char && char !== '0') {
      hasInvalidChar = char;
    }
  });

  return hasInvalidChar;
}

function CheckTimeUnityHasNumber(equation: string) {
  let hasInvalidChar = null;

  // check if it is a operation
  if (operationChars.includes(equation)) { return null; }

  const chars = equation.split('');

  chars.forEach((char, index) => {
    if (!+char && !+chars[index - 1] && chars[index - 1] !== '0' && char !== '0') {
      hasInvalidChar = char;
    }
  });

  return hasInvalidChar;
}

function CheckLastCharIsNumber(equation: string) {
  let lastCharIsNumber = null;

  // check if it is actually a number
  if (+equation) { return null; }

  // check if it is a operation
  if (operationChars.includes(equation)) { return null; }

  const chars = equation.split('');

  if (+chars[chars.length - 1]) {
    lastCharIsNumber = +chars[chars.length - 1];
  }

  return lastCharIsNumber;
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

    const hasInvalidChar = CheckCharacterAcceptance(equation);

    if (hasInvalidChar) {
      errorMessage = `character (${hasInvalidChar}) on sentence (${equation}) is not accepted`;
      return false;
    }

    const timeUnityMissingNumber = CheckTimeUnityHasNumber(equation);

    if (timeUnityMissingNumber) {
      errorMessage = `your sentence (${equation}) does not have a number before (${timeUnityMissingNumber})`;
      return false;
    }

    const lasCharIsNumber = CheckLastCharIsNumber(equation);

    if (lasCharIsNumber) {
      errorMessage = `last character on (${equation}) must be a time type like (d, h, m or s) instead of ${lasCharIsNumber}`;
      return false;
    }

    return true;
  });

  return errorMessage;
}
