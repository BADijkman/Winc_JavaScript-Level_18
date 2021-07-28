//A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = function (superheroes) {
  return superheroes.find(function (hero) {
    return hero.name === "Spiderman";
  });
};

// => function
const findSpiderMan2 = (superheroes) =>
  superheroes.find((hero) => hero.name === "Spiderman");

console.log(findSpiderMan(superheroes));
console.log(findSpiderMan2(superheroes));


//B
const doubleArrayValues = (array) => {
  let newArray = [];
  array.forEach((item) => {
    newArray.push(item * 2);
  });
  return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]


//C
const containsNumberBiggerThan10 = function (array) {
  return array.some(function (item) {
    return item > 10;
  });
};

// => function
const containsNumberBiggerThan10twee = (array) =>
  array.some((item) => item > 10);

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 14]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false
console.log(containsNumberBiggerThan10twee([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10twee([1, 2, 1, 2, 1, 2]));
// result should be false


//D
const isItalyInTheGreat7 = (landen) => landen.some((land) => land === "Italy");

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be false


//E
const tenfold = (array) => {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 10);
  });
  return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]


//F
const isBelow100 = (arrayNumbers) =>
  arrayNumbers.every((number) => number < 100);

console.log(
  isBelow100([, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 104, 77, 84, 98])
);
// result should be: false

console.log(
  isBelow100([, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 10, 77, 84, 98])
);
// result should be: true


//G
const bigSum = (array) => {
  return array.reduce((total, num) => {
    return total + num;
  });
};

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
