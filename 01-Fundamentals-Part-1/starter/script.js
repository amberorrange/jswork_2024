// let js = 'amazing';
// if (js === 'amazing') alert('JavasScript is fun!');

// console.log(40 - 2 - 33);

// console.log(23);
// let firstName = 'Matilda '
// console.log(firstName);



// let myFirstJob = 'programmer';
// let mySecondJob = 'teacher';

// console.log(myFirstJob);

// true;
// console.log(true);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);

// javascriptIsFun = 'Yes it is!'

// let year;
// console.log(typeof year);
// console.log(year);

// year = 1991
// console.log(typeof year);

// console.log(typeof null);


// const currentYear = 2024;
// const ageAmber = currentYear - 1993;
// const ageLita = currentYear - 1999;
// console.log('age amber', ageAmber);
// console.log('age alexa', ageLita);

// const firstName = 'amber';
// const lastName = 'orrange';
// console.log(firstName + ' ' + lastName);
// console.log(ageAmber > 45);
// console.log(ageLita < ageAmber);


// let x, y;
// x = y = 25 - 10 - 5;
// console.log('x', x, 'y', y);





//Strings and Template Literals: 
// const firstName = 'Amber';
// const job = 'software engineer';
// const birthYear = 1993;
// const year = 2024;
// const amber = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
//Typecoercison: how does JS squish numbers and strings together; will convert the number to a string to concatenate them
// console.log(amber);
//the process used above is very tedious- so we use TEMPLATE LITERALS INSTEAD. W/ template literals you can insert variables directly in the strings. 
// const amberNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(amberNew);
// // it uses `` and ${} to insert variables; can do operations, etc in the curly brackets as well 
// //this way is faster/easier...stopped at 7:37 on video 
// //we can use backtics for all strings..some developers do this and some don't...
// //TEMPLATE LITERALS ARE ALSO USED TO MAKE STRINGS WITH MULTIPLE LINES 
// console.log(`string 
// with 
// multiple lines`);






//IF/ELSE STATEMENTS: 
//can take decisions using code using if/else statements
// const age = 13;

//if statement: 
// if (condition that is being evaluated,this is a boolean value) {
//     if the condition is true - this code here will be executed
// } else {
//     if the condition is false- this code will be executed; else statements are optional
// }
//if/else statement is called a control structure (If/else control structure)


// if (age >= 18) {
//     console.log('Sarah can start her driving lessons');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young; Wait another ${yearsLeft} years...`)
// }


// const birthYear = 2022;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century); 





//Type Conversion and Coercion
//Back to value types- converting between types is what we do all the time 
//Type Conversion: when wee manually convert from one type to another 
//how to convert a string to a number: is by using the Number function 
// const inputYear = `1991`;
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// //using the number function will give you a converted version of the string as a number but never changes the actual string inputYear itself. inputYear is still a string
// //if you try to convert something to number thats not a number- you get NaN(means invalid number)
// //converting numbers to strings (less important)- use the string function
// console.log(String(23));
// //you can also convert to boolean but that will be in lecture about truthy/falsy values

// //Type Coercion: JS automatically converts types behind the scenes for us (implicit); JS does this in many situations
// console.log('I am ' + 23 + ' years old.');
// // happens whenever an operator is dealing with two values that have different types; JS will behind the scenes convert one value to match the type of the other so the operation can be executed
// //The plus operation triggers type coercion- JS converts the number 23 to a string (JS does the same with template literals) - in this way, we don't have to do the type conversion ourselves
// //not all the operators do type coercion to strings: in the example below, the minus operator triggers the strings to be converted to numbers and you get the number 10
// console.log('23' - '10' - 3);
// //while this one with the plus operator will result in the string "23103"
// console.log('23' + '10' + 3);
// //for the multiplication and division operators, it converts strings to numbers:
// console.log('23' * '10');
// console.log('23' / '10');

//other examples: 
//     2 + 3 + 4 + '5' goes to "95"
//     '10' - '4' -'3' - 2 + '5' goes to '15'




//Truthy and Falsy Values: 
//falsy values: values that are not exactly false but will become false when converted to a boolean 
//there are 5 falsy values: 0, '', undefined, null, Nan
//everything else is considered to be truthy values
// //we can use the Boolean function to convert values to a boolean
// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('')); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean('amber'));  //true
// console.log(Boolean({})); //true
// //we never really manually do and use this function but you need to know and be aware of how JS uses coercion to to do this behind the scenes
// //There are two scenarios where this happens: -when using logical operators (will look in upcoming lectures) and 
// //when using logical context, like in an if/else statement:
// const money = 100;
// if (money) {
//     console.log("don't spend it all");
// } else {
//     console.log("you should get a job.");
// }
// //in the logical context of an if/else statement, JS will try to convert that value (for the example above: money, which is a number) into a boolean - and it does it using the truthy and falsy rules listed above. 0 was converted to false bc 0 is a falsy value; 
// //you can also check if a variable is defined or not(if something exists or not)
// let height;
// if (height) {
//     console.log('yay, height is defined');
// } else {
//     console.log('height is undefined');
// }
//result: height is undefined and since undefined is a falsy value: height will be false and the else statement will be executed
//if you assign some value to it, if will be defined


// //Equality Operators: == vs ===: 
// //to check if two values are equal, we have equality operators
// //to check for equality we use the triple equal sign ===
// const age = 18;
// if (age === 18) console.log("you just became an adult.");
// //this === operator will return a boolean value; this is calld the strict equality operator and does not perform type coercion - only returns true when both values are exactly the same
// //remember a single equal sign  = is used for assignment
// //there is also the double equal sign operator == which is called the loose equality operator, this does type coercion
// console.log('18' == 18); //will be true because JS will convert the string to number and compared
// console.log('18' === 18); //will be false
// //the loose equality operator == is full of really weird rules and behaviors, avoid loose equality operators as much as you can- use the strict- to prevent bugs- its better even to convert manually rather than use the double equal sign. Best not to use it. 


// //there is a simple way to get a value from an webpage; using the prompt function
// const favorite = prompt("What's your favorite number?");
// console.log((favorite), typeof (favorite));
// if (favorite == 23) { //does type coercion '23' == 23
//     console.log('cool 23 is an amazing number...');
// }

// //other way is to use the number function...
// const favoriteOne = Number(prompt("What's your favorite number?")); //the string we get from the prompt will converted to a number
// if (favoriteOne === 23) {
//     console.log('cool 23 is an amazing number...');
// } else if (favoriteOne === 7) {
//     console.log('7 is also a cool number...');
// } else {
//     console.log('Number is not 23 or 7');
// }
// //Else if blocks: we can add more conditions to an if/else statement; you can add an else if block

// //there is also an operator for different: !==
// // this is the strict version- always use this version
// if (favoriteOne !== 23) { //if favoriteone does not equal 23..
//     console.log('why not 23?');
// }


//Boolean Logic: The AND, OR, and NOT operators are basic logical operators
//boolean logic is true for all programming
//AND operator - returns true only if both A and B are both true
//OR operator - returns true if either of the conditions is true (they both don't have to be true, just one can be)
//NOT operator - inverts true/false value for one Boolean value !
//if A is true - it will become false and vice versa
//the NOT operator has precedence over the AND and OR operators


//Logical Operators: AND is &&
//OR is ||
// //NOT is !value
// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log("Someone else should drive.");
// }



// //The Switch Statement
// //alternative way of writing a complicated if/else statement when all we want to do is compare one value to multiple diff options
// //Example: mapping an activity to each day...we could you an if/else statement with multiple else if blocks but its easier to use the switch statement; has a very specific, a bit unusual form 
// const day = 'wed'; //pretend this is some sort of user input where it can be any day
// switch (day) { //we are switching the day
//     case 'monday': //day === 'monday'; if this is true, the code underneath will be executed
//         console.log('Plan course structure'); //what we want executed if the above line is true
//         console.log('Go to coding meetup');
//         break; //need the break statement to get out of the structure
//     case 'tuesday':
//         console.log('prepare videos');
//         break;
//     case 'wed':
//     case 'thurs':
//         console.log('write code examples');  //whatever is executed here is for both 'wed' and 'thurs'
//         break;
//     case 'friday':
//         console.log("record vids");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy weekend');
//         break;
//     default: //executed if all the other cases fail/like an else block at end of else if statement
//         console.log("Not a valid day.");
// }


// //this if/else statement is the equivalent to the swich statement above; switch statement better...more readable, is becoming less and less used...but I guess down to personal preference is acceptable
// if (day === 'monday') {
//     console.log("Plan course structure")
// } else if (day === 'tuesday') {
//     console.log("Go to coding meetup")
// } else if (day === 'wed' || day === 'thurs') {
//     console.log("write code examples");
// } else if (day === 'friday') {
//     console.log("record vids")
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("Enjoy weekend");
// } else {
//     console.log('Not a valid day.');
// }




//Statements and Expressions
//Expression: piece of code that produces a value: ex: 3 + 4. or can just be a number 3. or something else like a 'string'
//Statement: bigger piece of code that is executed- used to translate actions we want the program to perform; doesn't produce a value...statement is like a sentence and expressions are like the words that make up the sentence 
//JS wants statements vs expressions is certain places/situations: 
//console.log(`I'm ${expression goes here} years old.`) vs an if/else statement
// const str = '23 is bigger'; //this whole line is a statement; the string '23 is bigger' is an expression



// //The Conditional (Ternary) Operator: allows us write something similar to an if/else statement in one line 
// const age = 23;
// age >= 18 ? console.log('I like to drink wine.') : console.log("I like to drink water.");
// //the stuff before ? is the condition to check (boolean);
// // the conditional goes here ? what to execute if conditional is true : what to execute if conditional is false;
// //this is called the ternary operator bc it has 3 parts
// //the one line above is the same as this if/else statement
// if (age >= 18) {
//     console.log('I like to drink wine');
// } else {
//     console.log('I like to drink water');
// }
// // //an operator always produces a value- it is an expression- can assign it to a variable 
// //we can use the ternary operator to conditionally assign operators
// //example: 
// const drink = (age >= 18) ? 'wine' : 'water';
// //this also helps with scope. and transforms code into shorter syntax
// //we can use the ternary operator inside a template literal bc it is an expression
// console.log('drink here: ', drink);
// console.log(`I like to drink ${(age >= 18) ? 'wine' : 'water'}!!!`);

// //ternary operator is not a replacement for if/else statements; perfect for quick decisions, etc.      


//Javascript Release ES5, ES6, ESNext: 
//we went over the history of JS and the importtance up the standardized updates ES5(2009) and ES6 or ES2015(2015- biggest update to the language ever)
//after ES6/ES2015 -ECMA, who is responsible for setting the standard of JS, called ECMAScript- changed to an annual release cycle to ship less features per update. Its easier to now just address each version by the release year. ex: ES2016, ES2017, ES2018... 
//backwards compatibility all the way to version one- new JS releases/versions can understand old JS code bc don't break the web....old features are never removed, more like incremental upates, so old websites can keep working forever...this can also lead to problems/bugs/quirks...gives JS a bad name/ppl unserious about JS
//how to use modern JS today bc there is no forward compatibility; there are browsers that might be old; 
//Two factors/scenarios to consider: 
//development: when you're building the site/application on your computer- to ensure you are using the latest JS features just make sure using the most up to date version of google chrome browser
//production: when web application is finished, you've deployed it and its running on the browsers of diff users who could use old ones; the solution is to convert the latest versions of JS to ES5 using transpiiling and polyfilling (we will use Babel for this in this course) to ensure browser compatibility for all users
//ES5 is fully supported in all browsers today- which is why we transpile to ES5 
//ES6-ES2023 onward is referred to as ES6+ as well as modern JS and is well supported in all modern browsers but no support in older browsers; can use most features in production witj transpiling and polyfilling...
//Futute ES versions are called ESNext 
//this course: modern JS but also learn some of how things used to be done to understand how JS does things behind the scenes; you will encounter older code bases with old JS versions when working...