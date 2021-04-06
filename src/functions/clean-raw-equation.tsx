export default function CleanRawEquation(equation: string) {
  let result = equation.replaceAll('\n', '');
  result = result.replaceAll(' ', '');

  return result;
}
