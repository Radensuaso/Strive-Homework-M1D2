/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/

/* EXERCISE 1
Enumerate and describe the main data types in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
String Data Type: Strings are multiple characters declared between quotes. This data type is used for context, like phrases and words. Here is an example to declare a variable with a string: 
let fullName = "André Sousa".

Number Data Type: The number Data types are used to represent positive or negative numbers. They are used to do Mathematic calculations. For example: 
let currentYear = 2021;
let birthYear = 1992;
let age = currentYear - birthYear; // The number 29 will be stored in the age variable.

Boolean Data Type: Booleans are used to store one of two values: true or false. They are used to attribute a variable as true or false, for example:
let skyIsRed = false;
let skyIsBlue = true;

Undefined Data Type: It's when a variable has been declared but holds no value. For example:
let firstName;
let surname = "Sousa";
console.log(firstName); // prints: undefined
console.log(surname); // prints: Sousa

Null Data Type: It is the absence of a value. a variable that holds no value at all. It could be a variable that had a value and than reassigned to null to empty it from a value.for example:
let country = "Portugal";
country = null;

Object Data Types: it is used to store complex information, like to describe a person. for this we use keywords and assign values to them. For example:
let person = {
    name: "André",
    age: 28,
    isStudent: true
}

Array Data type: It is used to store a list of values in the same variable. Each element has a numeric position, the counting starts in the number 0. for example:
let fruits = ["strawberry", "orange", "banana", "apple"];
console.log(fruits[1]); // will print: orange

Function Data type: functions are objects that execute a block of code. This is used to avoid repeating the same code again and again, because the same action can be used for multiple operations. For example:
function sum(a, b) {
    console.log(a + b);
}
sum(2, 5); // prints: 7
sum(5, 6); // prints: 11
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/*
A variable is like a container that we use to store a value. it can be any data type, like a string, number, boolean. Variables are used to manipulate code more easily, to pick up things we already used in the code before and use them again.
this is how we can declare a variable:
let dogColor = "brown";
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/


let sum = 12 + 20;
console.log(sum); 


/* EXERCISE 4
Create a variable named x containing the number 12.
*/


let x = 12; 
console.log(x);


/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/


let name = "John Doe"; 
console.log(name);


/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/


let subtraction = 12 - x;
console.log(subtraction);


/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/


let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/


x = 5;
if (x === 0) {
    console.log("zero");
} else if (x === 0) {
    console.log("zero");
} else if (x === 1) {
    console.log("one");
} else if (x === 2) {
    console.log("two");
} else if (x === 3) {
    console.log("three");
} else if (x === 4) {
    console.log("four");
} else if (x === 5) {
    console.log("five");
} else if (x === 6) {
    console.log("six");
} else if (x === 7) {
    console.log("seven");
} else if (x === 8) {
    console.log("eight");
} else if (x === 9) {
    console.log("nine");
} else {
    console.log("Not a valid number!");
}


/* EXERCISE 9
[Extra] Insert a value in a variable based on the result of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let a = 5 < 10 ? true : false;
console.log(a);

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/