//A
const addTheWordCool = function (array) {
  // add your code
  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]
//A =>
const addTheWordCool2 = (array) => {
  // add your code
  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool2(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//B
const amountOfElementsInArray = function (array) {
  return array.length;
};

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
// 3
//B =>
const amountOfElementsInArray2 = (array) => array.length;

console.log(amountOfElementsInArray2(["appels", "peren", "citroenen"]));
// 3

//C
const selectBelgiumFromBenelux = function (array) {
  return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"
//C =>
const selectBelgiumFromBenelux2 = (array) => array[0];

console.log(selectBelgiumFromBenelux2(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//D
lastElementInArray = function (array) {
  return array[array.length - 1];
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"
//D=>
lastElementInArray2 = (array) => array[array.length - 1];

console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  return array.slice(1);
};
const impeachTrumpSplice = function (array) {
  return array.splice(1);
};

console.log(impeachTrumpSlice(presidents));
// ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents));
// ["Obama", "Bush", "Clinton"]

//F
const stringsTogether = function (array) {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"
//F=>
const stringsTogether2 =  (array) => array.join(' ');

console.log(stringsTogether2(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"



//E
const combineArrays = function (array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]
//E=>
const combineArrays2 = (array1, array2) => array1.concat(array2);

console.log(combineArrays2([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]
