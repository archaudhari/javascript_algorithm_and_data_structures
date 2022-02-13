console.log('Hi there!') //Prints: Hi there!
//Methods
Math.random(); //Returns number between 0 and 1
//Libraries
Math.random(); //Math is the library
//Numbers
let amount = 6;
let price = 4.99;
//String.length
let message = 'good night';
console.log(message.length); //Prints : 9
console.log('howdy'.length); //Prints : 5
//Data Intances > Booleans : Booleans are a primitive data type. 
//They can be either true or false.
let lateToWork = true;
//Math.random()
console.log(Math.random()); //Prints : 0 - 0.9
//Math.floor()
console.log(Math.floor(5.95)); //Prints : 5

//This line is single line comment
//Null : Null is a primitive data type. 
//It represents the intentional absence of value.
//let x = Null;
//Strings
let single = 'Where my bandit hat?';
let double = 'Wheres my bandit hat?';
// Arithmetic Operators

// JavaScript supports arithmetic operators for:

// + addition
// - subtraction
// * multiplication
// / division
// % modulo

//Multi-line Comments /* The below configuration must be changed before deployment*/
let baseUrl = 'localhost/taxwebapp/country';
//Remainder/Modulo Operator
const weeksInYear = Math.floor(365/7); //Calculate no. of weeks
const daysLeftOver = 365 % 7; //Calculate no. of days
console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");

//Assignment Operators
//An assignment operator assigns a value to its left operand based on the value of its right operand. Here are some of them:

// += addition assignment
// -= subtraction assignment
// *= multiplication assignment
// /= division assignment
let number = 100;
//Both statements will add 10 
number = number + 10;
number += 10;
console.log(number);

//String Interpolation : String interpolation is the process of evaluating string literals containing one or more 
//placeholders (expressions, variables, etc).

let age = 7;

//String concatenation
'Tommy is' + age + 'years old.';

//String interpolation
'Tommy is ${age} years old.';

//Variables : Variables are used whenever there’s a need to store a piece of data.

const currency = '$';
let userIncome = 85000;

console.log(currency + userIncome + ' is more than the average income.');

//Undefined
//undefined is a primitive JavaScript value that represents lack of defined value.

var a;
console.log(a);

//Learn Javascript: Variables
//A variable is a container for data that is stored in computer memory.

let name1 = "Tammy";
const found = false;
var age1 = 3;
console.log(name1, found, age1);

// Declaring Variables
// To declare a variable in JavaScript, any of these three keywords can be used along with a variable name:

// var is used in pre-ES6 versions of JavaScript.
// let is the preferred way to declare a variable when it can be reassigned.
// const is the preferred way to declare a variable with a constant value.
var age;
let weight;
const numberOfFingers = 20;

//Template literals are strings that allow embedded expressions, ${expression}.
// While regular strings use single ' or double " quotes, template literals use backticks instead.
let name = "Codecademy";
console.log(`Hello, ${name}`);
