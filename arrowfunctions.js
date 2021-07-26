//deel A
// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

const ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions!");
ikRockArrowFunctions2();

//deel B
// zet de functie om naar een een regel arrow functie
const fivePlusSeven = function () {
  return 5 + 7;
};

let a = fivePlusSeven();
console.log(a);

const fivePlusSeven2 = () => 5 + 7;

let b = fivePlusSeven2();
console.log(b);

//deel C
// Opdracht: Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bij-elkaar optelt. Noem de functie myFunction.
const myFunction = (a, b) => a + b;
console.log(myFunction(5, 6));

//deel D
// Opracht: Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive.

const addFive = (a) => a + 5;
console.log(addFive(10));

//deel E
// Je hebt gezien dat arrow functions een implicit return statement hebben wanneer je de code op 1 regel kunt schrijven. Er is 1 uitzondering, namelijk bij het returnen van een object {} . Wanneer je een object returned moet het object in een () gezet worden, om niet verward te worden met de curly braces {} van een function.

// Opdracht: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({ greeting: "hoi" });
createObject();
