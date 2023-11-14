// Nico => [N, i, c, o] : string => string[]
// [N, i, c, o] => Nico : string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split("");
  }
}

const rtaArray = parseStr('Nico');
const rtaStr = parseStr(['N','i','c','o']);

console.log('rtaArray', 'Nico =>' ,rtaArray);
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);