const withOutEnd = () => {
  while (true) {
    console.log("Never stop to learn")
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === "string") {
    return "Is a string"
  } else if (Array.isArray(input)) {
    return "Is a array"
  } else {
    return fail("Not match");
  }
}