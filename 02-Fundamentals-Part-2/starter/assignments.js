'use strict';



function describeCounty(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}. `;
}

const unitedStates = describeCounty('United States', 330000000, 'Washington DC');
const madeUpCountry = describeCounty('Suburbia', 666666600, 'Candy Land');
const whoVille = describeCounty('Whoville', 3000, 'Whodunny');

console.log(unitedStates, madeUpCountry, whoVille);


//Arrow Expressions: 
function percentageOfWorld1(population) { //function declaration
    return (population / 7900) * 100;
}
const pop1 = percentageOfWorld1(33);
const pop2 = percentageOfWorld1(444);
const pop3 = percentageOfWorld1(6);

console.log(pop1, pop2, pop3);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}

const pop4 = percentageOfWorld2(33);
const pop5 = percentageOfWorld2(444);
const pop6 = percentageOfWorld2(6);
console.log(pop4, pop5, pop6);

const percentageOfWorld3 = population => (population / 7900) * 100;
const pop7 = percentageOfWorld3(33);
console.log(pop7);

//Functions Calling other Functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation('United States', 330));

//coding challenge: functions: 

function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

//can also do this: 
//const calcAverage = a, b, c => (score1, score2, score3) / 3;


const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}.`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win ${avgKoalas} to ${avgDolphins}.`);
    } else {
        console.log('No one wins.');
    }
}


checkWinner(scoreDolphins, scoreKoalas);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins2, scoreKoalas2);


//Introduction to Arrays: 
const populations = [331, 23, 44, 56];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])];
console.log(percentages);


//Basic Array Operations(Methods)
const neighbours = ['Mexico', 'Canada'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}

// neighbours[0] = 'Republic of Mexico';
console.log(neighbours);



//Introduction to objects
const myCountry = {
    country: 'US',
    capital: 'Washington DC',
    language: 'English',
    population: 331,
    neighbours: ['Canada', 'Mexico'],

    describe: function () {
        console.log(` The ${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}...`) //part of object methods assignment
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        console.log('is island? ', this.isIsland);

        //can also do:
        // this.isIsland = !Boolean(this.neighbours.length);
    }

};


//Dot vs Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capitalmcalled ${myCountry.capital}.`);

myCountry.population += 2;
console.log('increase by 2', myCountry.population);

myCountry['population'] -= 2; //remember this shortcut...
console.log('decrease by 2', myCountry.population);


//Object Methods: 
//added the method describe to the myCountry object; 
myCountry.describe();
//and another method checkIsland
myCountry.checkIsland();


//Iteration: The for loop

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting...`)
}

//Looping Arrays, Breaking Continuing
//const populations = [331, 23, 44, 56];

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}


console.log('percentages 2', percentages2);
console.log('percentages 1', percentages);




//Looping Backwards and Loops in Loops: 
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {

    // console.log(listOfNeighbours[i]);
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);

    }
}


//The while loop

//const populations = [331, 23, 44, 56];

// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }


// console.log('percentages 2', percentages2);
// console.log('percentages 1', percentages);


const percentages3 = [];
let i = 0;

while (i < populations.length) {
    const percentage = percentageOfWorld1(populations[i]);
    percentages3.push(percentage);
    i++;
}

console.log('percentages with while loop;', percentages3);



