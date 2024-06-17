// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//Developer Skills:

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Setting Up Prettier and VS Code

//installed a tool called Prettier to help with code formatting
//VS Code extension: installed then go to settiings and searedf for defaul formatter and changed to Prettier
//can go to Prettier documentation for ways to diff options - added the .pretterrc configuration file and changed from double quotes to single quotes; and another change, etc
//just a visual tool

//also went to menu: selected Code, settingd, configure user snippets (created a new snippet) and here you can add shortcuts: look at amber.code-snippets. added shortcut for console.log() only have to type cl..can do this for other things

//Some extensions he uses:
//two for html development: Auto Close Tag, Auto Rename Tag
//ES Lint
//Image Preview
//Settings Sync
//ToDo highlight: highlight parts of a text (15:00 min in video)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Installing Node.js and setting up a dev environment

//a couple ways we will set up a dev env:
//1: install a tool called Live Server: VS code extension:
//there is a goLive button on the bottom right of VS code that you can select that will take you to the corresponding location in the browser so you can see your logs and then updates the broswer automatically when you make a change; this is an easy way for dev env but a more professional way is number 2

//2: second approach, that is more professional, is to install node.js and then use an npm package called Live Server there

//node.js is a way of running JS outside of the browser and a way of running development tools
//installed node.js (it is now available as a program in the terminal)
//then in the terminal install live server: sudo npm install live-server -g
//npm is just a program to download tools
//-g means you want it installed globally

//After everything is installed: in the terminal you type 'live-server'; it will open up a tab (from the project folder you are in in VS code) in the browser for you. the browser will automatically update when you make changes to VS code and save; it will open the index.html file by default

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Learning how to code

//have specific, measurable, realistic, time-based goal
//know exactly why you are learning to code
//imagine a big project you want to be ablt to build
//research technologyies you nedd and then learn them

//understand the code that you're studying and typing
//always type the code, don't copy/paste

//reinforce what you're learning: after you learn a new feature, use it immediately
//take notes
//challenge yourself and practice with small coding exercises and challenges, ex: code wars
//practice coding on your own: own projects with no guidance

//don't get stuck trying to write the perfect code - can come back and improve it later
//embrace the fact that you'll never know everything in software development

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//How to think like a developer: Become a problem solver

//make sure you 100% understand the problem; ask the right questions to get a clear picture of the problem
//ex: if you need a function, what should be passed into it, what should be returned?, etc.

//divide and conquer: break a big problem into smaller sub-problems - ESSENTIAL

//don't be afraid to do as much research as you have to

//for bigger problems, write psuedo-code before writing the actual code

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Using google, stackoverflow, and MDN
//Skipped

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Debugging (Fixing Errors)
//bugs completely normal part of software development
//debugging:
//1: identify- becoming aware that there is a bug; can be during development, testing software, a user reports during production(worst); also importatnt to understand context in which the bug happens
//2: Find- isolating where exactly the bug is happening in the code; can do that using the developer console (for simple code), and using a debugger(complex) code
//3: Fix: correct the bug; replace wrong code with correct soloution
//4: prevent: search for the same bug in similar code; prevent that bug from occuring again;  writing tests using testing software: this is very important

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Debugging with the console and Breakpoints:
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     //C) Fix (the solution is convert the string into a number...)
//     // value: prompt('Degrees Celsius:'),
//     value: Number(prompt('Degrees Celsius:')), //fixed bug here
//   };

//   //B) Find - shows that the value received from the prompt is a string and we need it to be a number
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

//A) Identify the bug
// console.log(measureKelvin());

//how to use a debugger in google chrome:
//in developer tools, go to the sources tab
//click on relevant file, in this case, script.js, it is here that we can add/set breakpoints...
//do this by clicking in the bar left of the line of code you want the breakpoint to be at
//on the right there is a second panel where you can see a list of all your break points
//after creating your break point - when you reload the page, the execution will stop right at this point; when the execution gets to the break point and it stops, you can look in this panel on the right side and see all the variables, etc
//on the right panel is also a step button(right arrow), which will let you execute the next line of code; you can execute code one line at a time
//click the breakpoint again to remove it

//console.table(is a nice way to format an object, especially a big one so easier to read)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #1:

//take in array
//make counter to count days- set to 0, inc by 1 each loop (or you can use i...)
//loop through the array while using the counter

// const counter = 0

// function printForecast(maxTemps) {
//   for (let i = 0; i < maxTemps.length; i++) {
//     console.log(`${maxTemps[i]} degrees Celsius in ${i + 1} days ...`);
//   }
//   // counter++
// }

// const test1 = [17, 21, 23];
// const test2 = [12, 5, -5, 0, 4];

// printForecast(test1);
// printForecast(test2);
