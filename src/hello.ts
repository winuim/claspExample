const greeter = (person: string): string => {
  console.log(person);
  return `Hello, ${person}!`;
};

function testGreeter(): string {
  const user = "Grant";
  const msg = greeter(user);
  Logger.log(msg);
  return msg;
}

export { greeter, testGreeter };
