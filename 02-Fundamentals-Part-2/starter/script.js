"use strict";

//Fundamentals Part 2:

//Activating Strict Mode: special mode that makes the JS we code secure;
//has to be the first statement in the script - line 1: 'use strict';
//forbids us to do certain things and makes certain errors visible in situations where JS would fail silently; strict mode also has reserved words it might implement in the future (ex: interface)

///////////////////////////////////////////////////////////////

//Functions: a piece of code we can reuse over and over again; reusable chunks of code- DRY- Don't repeat your code
//the first step is to declare a function;

// function logger() {  //logger is the function name;
//     // this is called the function body; this code will be executed everytime we call/run the function
//     console.log('My name is Amber.');
// }

// //After creating the function, we can use it as many times as we want after..terms used to refer to this are running, invoking, and calling the function
// //we write the function name with parenthesis

// logger();

// //when we write functions, we also can pass data into that function AND the function can return data as well; like a machine
// //the data you pass into function is/are called a parameter(s) and is like a variable that's specific to the function
// //
// function fruitProcessor(apples, oranges) { //apples and oranges are parameters(input date of the function)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice //use the return keyword to return any value from the function that can be used in our code
// }

// fruitProcessor(5, 0); //when we call this function later in the code, we need to input the parameters by passing in real specific values, which in this case would be 5 for apples and 0 for oranges; 5 and 0 are what we refer to as arguments; called passing an argument(s) into a function
// //in order to use a value that's returned from the function, you need to store it in a variable
// const appleJuice = fruitProcessor(5, 6);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//parameters are not necessary and not all functions need to return something

///////////////////////////////////////////////////////////////

//Function Declarations vs Expressions:
//function declaration: use the function keyword to declare a function
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression: we write function without a name, still have parameter and function body; we store all of this in a variable; this variable will be the function; its a function without a name, called an anonymous function;
// const calcAge2 = function (birthYear) { //the function is stored in the calcAge2 variable (a function is a value and can be stored in a variable)
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2)

//it's important to know these two ways to call a function; there will be situations where we will need both

//we can call function declarations before they're defined in the code....BUT NOT WITH EXPRESSIONS-why this happens- will go into more detail later

//diff developers have diff prefences- its no problem to have a preference and code according to that preference but its still important to know both

//AMBER THE BEST WAY TO REMEMBER IS TO THINK OF DECLARATIONS AS WITH A NAME AND EXPRESSIONS YOURE SAVING THE FUNCTION DIRECTLY INTO A VARIABLE(NO FUNCTION NAME)

// ///////////////////////////////////////////////////////////////

// //Arrow Functions: a third type of function added in ES6
// //shorter/faster to write
// const calcAge3 = birthYear => 2037 - birthYear; //birthYear is the parameter; arrow functions are a special form of a FUNCTION EXPRESSION; the return is implicit w/o writing the keyword and no curly braces works only if the body is one line of code
// const age3 = calcAge3(1991);
// console.log(age3);
// //it gets more complicated if we add more parameters and more code

// const yearsUntilRetirement = (birthYear, firstName) => { //more than one line means curly brackets and return statement needed; more than one parameter, then wrap them in parenthesis
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, 'Amber'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// //arrow functions do not get a this keyword! this is important and we will follow up on this later....
// //we will keep using the normal functions and later better understand arrow functions;

// ///////////////////////////////////////////////////////////////

// //Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// //example of calling the cutFruitPieces function inside of the fruitProcessor function
// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice
// }
// console.log(fruitProcessor(2, 3));
// //its very common for one function to call another function- DRY principle

/////////////////////////////////////////////////////////////////

// //Function recap:
// //function declaration: can be used before declared
// function calcAge4(birthYear) {
//     return 2037 - birthYear;
// }
// //function expression: essentialily a function value stored in a variable -
// const calcAge5 = function (birthYear) {
//     return 2037 - birthYear;
// }
// //arrow function: good for one line functions- has no this keyword(visit later)...doesn't use function keyword
// const calcAge6 = birthYear => 2037 - birthYear;

// //Three diff ways to write functions but all work in a similar way: receive input data, transform data, and then output data
// //remember anatomy of a functio: function name, parameters: placeholders to receive input values; like local variables of a function. function body: block of code that we want to reuse and precess the function's input data; return statement: output a value from the function and terminate execution
// //call the function using parenthesis
// const myAge = calcAge4(1993);
// //myAge is a variable used to save the returned value that's output from the function calcAge4; 1993 is an argument: which are actual values of function parameters

///////////////////////////////////////////////////////////////////

// Introduction to Arrays:
// an array is a data structure; I like to think of it as a list of data;
// two most important data structures in JS: arrays and objects
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// //a diff way to do the same using array function - I prefer the brackets and brackets is generally used as well
// const years = new Array(1991, 1984, 2008, 2020);
// //arrays can hold as many values as we want and values of any type
// //you can acknowledge a specific value in the array by its postion; which is counted BUT its starting number is 0.
// console.log(friends[0]); //gives value 'Michael'
// console.log(friends[2]); // gives the value 'Peter'
// //you can also count the number of values in an array also known as the length of the array
// console.log(friends.length); //console shows 3
// //you can also get the last element in an array using the length
// console.log(friends[friends.length - 1]); // 'Peter'
// //the brackets are not only for retrieving elements - you can also add elements and replace them
// friends[2] = 'Jay'; //this replaces 'Peter' with 'Jay'
// console.log(friends);
// //Arrays are an example of a primitive value- which means it is mutable, meaning it can be changed; you can mutate elements but not change the entire array; arrays can hold diff types at the same time- you can put arrays inside of arrays and so on;

// const amber = ['amber', 'orrange', 1993, 'software engineer', friends];
// console.log(amber);
// console.log(amber.length);

// //array exercise:
// const calcAge = function (birthYear) { //the function is stored in the calcAge2 variable (a function is a value and can be stored in a variable)
//     return 2037 - birthYear;
// }

// const years1 = [1990, 1967, 2002, 2012, 2018];
// const age1 = calcAge(years1[0]);
// const age2 = calcAge(years1[1]);
// const age3 = calcAge(years1[years1.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])];
// console.log(ages);

///////////////////////////////////////////////////////////////////

//Basic Array Operatations(methods):

// //JS has some built in functions that we can directly apply to arrays; these are called methods(think of them as array operations)
// //There are many array methods; go over some of the basic ones:

// //Add Elements:

// //Push
// const friends = ['Michael', 'Steven', 'Peter']; //push method adds element to end of array
// friends.push('Jay'); //push is method, which technically/essentially is a function that we call on the friends array; 'Jay' was added to the end
// console.log(friends); //push added the element 'Jay' to the end of the array

// //Unshift
// friends.unshift('John'); //the unshift method adds element to the beginning of the array
// console.log(friends);
// //both the push and unshift method return the new length of the array;

// //Remove Elements:

// //Pop
// friends.pop(); //removes the last element in array
// console.log(friends);

// //Shift
// friends.shift(); //removes the first element in the array
// console.log(friends);

// //Both shift and unshift return the removed element

// //IndecOf
// console.log(friends.indexOf('Steven')); //shows us the postional location of an element in the array - should return the value 1
// console.log(friends.indexOf('Bob')); // if we try to use indexOf for a value that's not in the array- it will return -1

// //includes
// //similar method to IndexOf that is a part of ES6 - good for conditionals
// //will return true if element is in array/false if it's not - uses strict equality
// console.log(friends.includes('Steven')); //returns true
// console.log(friends.includes('Bob')); //returns false

// if (friends.includes('Steven')) {
//     console.log('you have a friend named Steven.');
// }

// //Coding Challenge #2 in Fundamentals Part 2:
// function calcTip(billValue) {
//     if (billValue <= 300 && billValue >= 50) {
//         return billValue * .15
//     } else {
//         return billValue * .15
//     }
// }

// //faster way to do the function (for practice):
// // function calcTip2(billValue){
// //     return bill >= 50 && bill <= 300 ? billValue * .15: billValue * .2;
// // }

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1],), calcTip(bills[2])];
// console.log(tips)

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log('Totals: ', totals)

///////////////////////////////////////////////////////////////////

//Introduction to Objects:
//objects are a data structure where we can define key/value pairs- I like to refer to them as dictionaries (from first learning python)
//uses the curly brackets;
// const amber = {
//     firstName: 'Amber',
//     lastName: 'Orrange',
//     age: 2037 - 1993, job:
//         'software engineer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
//keys are on the left of colon; firstName, lastName, etc
//values are on the right and can by any type; each key has a value
//each key is also referred to as/called a property; so the object amber has 5 properties; property(or key firstName with value "Amber", property lastName with value "Orrange" and so on

//there are multiple ways to create objects; the one above is the most common- called the object literal syntax
//in objects, the order of key/value pairs DOES NOT matter when we want to retrieve them - unlike in arrays, where the order does matter

///////////////////////////////////////////////////////////////////

//Dot vs. Bracket Notation: going to learn how to retrieve and change data in objects using both the dot and bracket notation
// const amber = {
//     firstName: 'Amber',
//     lastName: 'Orrange',
//     age: 2037 - 1993, job:
//         'software engineer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(amber);

// //Two ways to get a property from an object- you do this using the property name itself

// //Dot Notation; have to use the real property name as it appears in the object
// //the dot is an operator
// console.log(amber.lastName);

// //undefined is what we get when try to access a property that doesn't exist
// //for example amber.favColor is not defined in the object amber

// //Bracket Notation
// console.log(amber['lastName']);
// //in the bracket notation we can put any expression we like
// const nameKey = 'Name';
// console.log(amber['first' + nameKey]); //doing something like this is more common then you might think; can't do this with dot operator

// const interesstedIn = prompt('What do you want to know about Amber? Choose between firstname, lastName, age, job, and friends.');

// if (amber[interesstedIn]) { //if the property thats input in interestedIn extists, do this action...
//     console.log(amber[interesstedIn]);
// } else {
//     console.log('Wrong request!');
// }

// //how to add new properties to the object:
// amber.location = 'US';
// amber['homeState'] = 'Texas';
// console.log(amber);

// console.log(amber['firstName']);

// //Challenge: Amber has (number of friends), and her best friend is (first from friends list)
// console.log(`${amber['firstName']} has ${(amber['friends'].length)} friends, and her best friend is ${(amber['friends'][0])}.`);

// //with dot notation
// console.log(`${amber.firstName} has ${amber.friends.length} friends, and her best friend is ${amber.friends[0]}.`);

// //although I'm most comfortable with bracket notation; remembering dot notation will be good bc there will be times where its easier to read/makes more sense using the dot notation; as seen in the example above

///////////////////////////////////////////////////////////////////

//Object Methods:
//we take objects even further- functions are just another type of value;
//bc of this- we can even have functions inside of objects as key value pairs
//specify the function as an expression- function name in the key(pay attention to the syntax)- remember a function expression is a value- (can't use a function declaration)

// const amber = {
//     firstName: 'Amber',
//     lastName: 'Orrange',
//     birthYear: 1993,
//     job:
//         'software engineer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//Version 1
// calcAge: function (birthYear) {
//     return 2037 - birthYear;
// }

//Version 2
// calcAge: function () {
//     console.log('this: ', this);
//     return 2037 - this.birthYear; //this keyword explanation below   ()
// }

//Version 3
// calcAge: function () {
//     this.age = 2037 - this.birthYear; //in this version we setting amber.age to this value; this establishes the age property- we can now access this property by using amber.age
//     return this.age;  //this keyword explanation below   ()
// },

// //challenge: make my own method
// getSummary: function () {
//     // return `Amber is a 30 year old software engineer, and she has a (or no) driver's license`;
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.` //why did we use this.calcAge() instead of this.age? Bc we cannot assume that calcAge was already called before; and if we don't call calcAge() before we call getSummary() then the age property would not exist- its better to do calcAge
//     //take note that you can even put functions/methods inside template literals
// }
// };

//for the challenge:
// console.log(amber.getSummary()); //remember, it is a function so don't forget the paragraph: getSummary();

//ANY FUNCTION ATTACHED TO AN OBJECT IS CALLED A METHOD (CALCAGE IS A METHOD), a method is a property that holds a function value; as opposed to a string, boolean, number, array, etc

// console.log(amber.calcAge(amber.birthYear)); //used with function version w/o the this keyword (version 1)
// //you can also access using the bracket notation
// console.log(amber['calcAge'](amber['birthYear'])); //remember to use string in bracket notation.. //goes with version 1

//in every method, JS gives us access to a special variable/keyword called this- we can pass the birthyear- example above int the amber object
//the this keyword is eqaul to the object on which the method is called; it is equal to the object calling the method(in this case, amber)
//using the this keyword removes the need to pass in the parameter in the example above; the first version of calcAge uses the birthYear parameter while the example using this doesn't- we instead use this.birthyear in the function bc we are pulling the birthyear (1993) FROM THE AMBER OBJECT ITSELF.......

// console.log('amber.calcaAge', amber.calcAge()); // using the fuctnion above w/ the this keyword; ( goes with version 2) -get 44

//we will learn more about the this keyword in later sections
//this keyword also helps adhere to DRY principle (11 min in)

// console.log(amber.age); //goes with version 3; we can do this instead of versions 1 and 2

//POINTED NOTE: ARRAYS ARE ALSO OBJECTS, A SPECIAL TYPE OF OBJECT THAT CAN HOLD AN ORDERED COLLECTION/LIST OF ELEMENTS - MORE IN UPCOMING LECTURES

///////////////////////////////////////////////////////////////////

//Coding Challenge 3:
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// //remember you have to call the calcBMI() method before hand to have access to mark.BMI property that is defined in the acutal calcBMI method/function
// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI of ${mark.BMI} is higher than ${john.fullName}'s BMI of ${john.BMI}.`)

// } else if (john.BMI > mark.BMI) {
//     console.log(`${johnfullName}'s BMI of ${john.BMI} is higher than ${mark.fullName}'s BMI of ${john.BMI}.`);
// }

//result: Mark Miller's BMI of 27.309968138370508 is higher than John Smith's BMI of 24.194608809993426.

///////////////////////////////////////////////////////////////////

//The For Loop: loops are control structures (like if else statements); they help to automate repetitive tasks

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repeition ${rep}`);
// }

//let rep = 1; sets the beginning of the counter; use let bc it changes each loop (rep stand for repetition but you can name it any variable name)
//rep <= 10; this is a logical condition that is evaluated before each loop is executed-if the condition is true, the loop will run again but if false, the loop will stop (the loop will keep running while this condition stays true
//repp++ increases the counter by 1 after each completion of the loop

///////////////////////////////////////////////////////////////////

//Looping Arrays Breaking and Continuing
// const amber = [
//     'Amber',
//     'Orrange',
//     2037 - 1993,
//     'software engineer',
//     ['Michael', 'Peter', 'Steven']
// ];

// console.log(amber.length);
// const types = [];

// //amber[5] does not exist
// for (let i = 0; i < amber.length; i++) { //i has been a traditional variable counter name. we start the counter at 0 bc array is 0 based; to loop through the whole array, just use the length, remember this!

//     console.log(amber[i], typeof (amber[i]));
//     types.push(typeof (amber[i]));

//     //another way to do this:
//     // allTypeOfs[i] = typeof (amber[i]);
// }
// console.log(types);

//practice: use a for loop to calculate people's ages and put them in their own array
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// //there are two important statements to know about in relation to loops
// //Continue and Break
// //Continue: to exit the current iteration of the loop and continue to the next one
// //Break: completely terminate and exit the WHOLE loop
// const stringsOnly = [];

// //lets say we only wanted to log those with a type of string to an array, continue would be good for that
// for (let i = 0; i < amber.length; i++) {

//     //example given
//     if (typeof (amber[i]) !== 'string') continue; //if it isn't a string, it will exit current loop and start next iteration
//     console.log(amber[i], typeof (amber[i]));

//     //how I would do it:
//     if (typeof (amber[i]) === 'string') {
//         console.log(amber[i], typeof (amber[i]));
//     }
// }

// //another case: we want to stop logging after a number is printed
// for (let i = 0; i < amber.length; i++) {
//     console.log(amber[i], typeof (amber[i]));
//     if (typeof (amber[i]) === 'number') break; //if this condition is true - exits whole loop
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Looping Backwards and Loops in Loops

//Looping backwards
// const amber = [
//     'Amber',
//     'Orrange',
//     2037 - 1993,
//     'software engineer',
//     ['Michael', 'Peter', 'Steven']
// ];

// //position 4, 3, 2, 1, 0 (want i to start at 4 and count backwards to 0 in this specific example )
// for (let i = amber.length - 1; i >= 0; i--) { //length minus - 1 will start at the last element in the array (
//     console.log(i, amber[i]);
// }

// //loop inside of a loop :
// //ex we have 3 exercise and we want to repeat each 5 times
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`Starting Exercise ${exercise}`);

//     for (let set = 1; set < 6; set++) {
//         console.log(`Completing set ${set} of exercise ${exercise}...`); //this whole loop will run before going back to outer loop
//     }

//     console.log(`completed exercise ${exercise}`);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////

//The While Loop
//

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// //Coding Challenge #4
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let billNumber = 0; billNumber < bills.length; billNumber++) {
//     const tip = calcTip(bills[billNumber]);
//     tips.push(tip);
//     totals.push(tip + bills[billNumber]);
// }

// console.log('tips', tips);
// console.log('totals', totals);

// function calcAverage(arr) {
//     //calculates the average of allthe numbers in the given array
//     let sum = 0;
//     //loop through array- add number to the sum, divide total sum by length of array

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         console.log(`total is ${sum}.`);
//     }

//     return sum / arr.length;
// }

// console.log(calcAverage(totals)); //275.19
// console.log(calcAverage(tips)); //42.89
