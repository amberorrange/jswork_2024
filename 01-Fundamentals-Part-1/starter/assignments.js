const country = 'US';
const continent = 'North America'
// let population = 332000000;
let population = 13000000;


console.log(country);
console.log(continent);
console.log(population);


const isIsland = false;
const language = 'english';

halfPop = population / 2;
console.log(halfPop);
// population++;
console.log(population);
const moreThanFin = population > 6000000;
console.log(moreThanFin);

// const description = country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language + '.';
// console.log(description);

const description = `The ${country} is in ${continent} and its ${population} million people speak ${language}.`;
console.log(description);
const avgPop = 33000000;

if (population > avgPop) {
    console.log(`${country}'s population is ${population - avgPop} above average.`);
} else {
    console.log(`${country}'s population is ${avgPop - population} below average.`);
}

//4 number, 617 string, 23 number, false boolean, 1143 number



// console.log(typeof (isIsland));
// console.log(typeof (population));
// console.log(typeof (country));
// console.log(typeof (language);

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if (numNeighbours === 1) {
//     console.log('Only 1 border.');
// } else if (numNeighbours > 1) {
//     console.log("More than one border.")
// } else {
//     console.log("No borders");
// }

// if (language === "english" && population < 50000000 && !isIsland) {
//     console.log(`You should live in ${country}`);
// } else {
//     console.log(`${country} does not fit your criteria.`);
// }

//SWITCH STATEMENT
// switch (language) {
//     case 'mandarin':
//     case 'chinese':
//         console.log('MOST number of native speakers');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log("3rd place");
//         break;
//     case 'hindi':
//         console.log("number 4");
//         break;
//     case 'arabic':
//         console.log('5th most spoek langugate');
//         break;
//     default:
//         console.log('Great language as well.')
// } 

//CONDITIONAL (TERNARY) OPERATOR: 

const aboveOrBelowAvg = population > 33000000 ? 'above' : 'below';

//there are two ways to do this- i prefer the first way to the second by putting it in a variable first, its easier for me to understand
console.log(`Population is ${aboveOrBelowAvg} average.`);
//this second way is what the given solution went with as well
console.log(`Population is ${population > 33000000 ? 'above' : 'below'} average.`);