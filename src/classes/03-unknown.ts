let anyVar: any;
let isNew: boolean = anyVar;
anyVar.doSomething(); // Bad Practices

let unknownVar: unknown;

unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = NaN;
unknownVar = 'string';
unknownVar = [];
unknownVar = {};

// unknownVar.toUpperCase(); 
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  if (typeof str === 'string') {
    return JSON.parse(str);
  }
}

if (typeof unknownVar === "boolean") {
  let isNewV2: boolean = unknownVar;
}