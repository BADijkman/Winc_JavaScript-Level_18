const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

//1
//Maak een array van alle superhelden namen
const onlyNames = superheroes.map((item) => {
  return item.name;
});
// => funct
const onlyNames2 = superheroes.map((item) => item.name);

console.log("++1++ all hero names", onlyNames);
console.log("++1++ => all hero names", onlyNames2);

//2
// Maak een array van alle "lichte" superhelden (< 190 pounds)
const less190Pounds = superheroes.filter((item) => {
  return item.weight < 190;
});

// => funct
const less190Pounds2 = superheroes.filter((item) => item.weight < 190);

console.log("++2++ hero's less 190", less190Pounds);
console.log("++2++ => hero's less 190", less190Pounds2);

//3
//Maak een array met de NAMEN van de superhelden die 200 pounds wegen
const exact200 = superheroes
  .filter((item) => {
    return item.weight == 200;
  })
  .map((item) => {
    return item.name;
  });

console.log("++3++ names hero's exact 200", exact200);

//4
// Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const firstAppearances = (superheroes) => {
  return superheroes.map((item) => {
    return item.first_appearance;
  });
};

console.log("++4++ first Appearances", firstAppearances(superheroes));

//5
//Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.

const publisher2 = (superheroes, publisher) => {
  return superheroes.filter((item) => {
    return item.publisher == publisher;
  });
};

console.log("++5++ publisher DC Comics", publisher2(superheroes, "DC Comics"));
console.log(
  "++5++ publisher Marvel Comics",
  publisher2(superheroes, "Marvel Comics")
);

//6
//Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! Het gewicht dat je hier ziet, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?
//1316

const publisherWeight2 = (superheroes, publisher) => {
  return superheroes
    .filter((item) => {
      return item.publisher == publisher;
    })
    .map((item) => item.weight)
    .map((item) => parseInt(item))
    .reduce((total, num) => {
      return total + num;
    }, 0);
};

console.log(
  "total weight DC Comics",
  publisherWeight2(superheroes, "DC Comics")
);

//7 Doe hetzelfde met alle superhelden van Marvel Comics
console.log(
  "++7++ total weight Marvel Comics ",
  publisherWeight2(superheroes, "Marvel Comics")
);


//8 Bonus: zoek de zwaarste superheld!