/* Variables & Data Types */

//Question 1: There are 8 Primitive Data Types in JavaScript, list them all 
//Note: Arrays and Objects are not primitive data-types
//Answer: 
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

//Question 2: Is JavaScript a dynamically typed Language? or a Statically typed language?
//Answer: Dynamically typed

//Question 3: Variable Scoping
// Part 1 - What 2 types of scope can variables declared with the "var" keyword have?
//Answer: Global scope and function scope

//Part 2 - As of ES6 JavaScript has 2 new variable declaration keywords: "let" and "const".  
//How are let and const variables scoped?
//Answer: Block-scoped

//Part 3 - What is the difference between "let" and "const"? Hint: it has to do with variable reassignment
//Answer: "let" allows reassignment, while "const" does not allow reassignment of the variable itself (though the contents of objects and arrays declared with const can still be modified).


//Question 4:

//Part 1: Read the code written below. What is wrong with the code?

var carBrandOne = "Ford";
let carBrandOne = "Mercedes";

// comment out the code above and write a correction to the code below this line
// Corrected Code:
var carBrandOne = "Ford";
let carBrandTwo = "Mercedes";

//Part 2: Read the code written below. What is wrong with the code?

const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"};
// myConstant = 10;
// comment out the code above and write a correction to the code below this line
// Corrected Code:
const myConstantCorrected = {id: 1, name: "Joe", favoriteSnack: "ice cream"};
myConstantCorrected.id = 10;

// Part 3: Read the code written below. What will happen? Will this throw an error?
const myConstant2 = {id: 2, name: "Bill", favoriteSnack: "potato chips"};
myConstant2["name"] = "James";
// Answer: This will not throw an error. Although myConstant2 is a constant, the properties of the object it references can still be changed.

//Part 4: Read the code written below. Look at the function call below the defined function,
// Will declaring a let variable with the same name throw an error in this case? Why or why not?
// What will the function return?

function variablesExample(number){
    let returnMessage = '';
    if(number > 10){
        let message = "the given number is larger than 10";
        returnMessage = message;
    }else if(number === 10){
        let message = "the given number is equivalent to 10";
        returnMessage = message;
    }else{
        let message = "the given number is less than 10";
        returnMessage = message;

    }
    console.log(returnMessage);
    return returnMessage;
}
variablesExample(15);
// Answer: Declaring a let variable with the same name in different blocks (like if, else if, else) will not throw an error because they are block-scoped. The function will return "the given number is larger than 10".

//Question 5: 

// Part-1: What are acceptable characters that you can use to start variable names?
//Answer: Letters (a-z, A-Z), underscore (_), dollar sign ($)

//Part-2: What are acceptable characters that you can use to name variables (after the first character of the name)?
// Answer: Letters (a-z, A-Z), numbers (0-9), underscore (_), dollar sign ($)


/* END OF VARIABLES AND STRINGS SECTION */



/* Strings */

// Given the string below,
// Part 1 - Write code that will return the 8th character of the string
let coolString = "Hello World is a tradition";
console.log(coolString.charAt(7)); // returns 'o'

// Part 2 - Then write code that will return (or console.log) "is a"
console.log(coolString.slice(12, 16)); // returns 'is a'

//Part 3
// How would you return the 4th from the last character from the coolString without just hard coding the index of that character?
console.log(coolString.charAt(coolString.length - 4)); // returns 'i'

//Part 4
// Look at the variables below that have been initialized with string data.  
//What are the 2 ways you can concatenate these strings together?
let aString = "Back to ";
let bString = "The Future";

//Write the 2 ways of concatenating the strings below this line. Declare a new variable for the results.
let concatenatedString1 = aString + bString;
let concatenatedString2 = `${aString}${bString}`;

console.log(concatenatedString1); // returns 'Back to The Future'
console.log(concatenatedString2); // returns 'Back to The Future'


/*For Loops */
// You are provided an array of strings below
// an example of a console.log is also provided

let namesArray = ["Joe", "Larry", "Bob", "James", "David", "Tim", "Jimmy", "Jessie", "Marty"];
console.log("The first name is: ", namesArray[0]);

/*directly below this comment, 
write a for loop that iterates over the namesArray from the beginning to the end of the array and logs the names to the console */
for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray from the END to the BEGINNING of the array and logs the names to the console
for (let i = namesArray.length - 1; i >= 0; i--) {
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray BUT only logs every other name to the console
for (let i = 0; i < namesArray.length; i += 2) {
    console.log(namesArray[i]);
}


/*While Loops*/

// Inside the function below, Write a while loop that will console.log("Hello World") "number" times. Use continueBoolean in your while loop's specified condition

function whileLoopQuestion1(number){
    let continueBoolean = true;
    let count = 0;
    while (continueBoolean && count < number) {
        console.log("Hello World");
        count++;
    }
}

whileLoopQuestion1(20);


/* Array Methods */

//What does the Array.prototype.push() method do? What does it return?
//Answer: It adds one or more elements to the end of an array and returns the new length of the array.

//What does the Array.prototype.unshift() method do? What does it return?
//Answer: It adds one or more elements to the beginning of an array and returns the new length of the array.

//What does the Array.prototype.pop() method do? What does it return?
//Answer: It removes the last element from an array and returns that element.

//What does the Array.prototype.shift() method do? What does it return?
//Answer: It removes the first element from an array and returns that element.

// What does the Array.prototype.join() method do? What does the 1 optional parameter do to modify how this method works? What does it return?
//Answer: It joins all elements of an array into a string. The optional parameter specifies a separator to be used between elements. It returns the resulting string.

//What does the Array.prototype.slice() method do? What will it return?
//Answer: It returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

//What does the Array.prototype.splice() method do? What will it return?
//Answer: It changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.


//Look at the Array Below
let nestedArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],[13,14,15],[16,17,18]], 19];
//How many dimensions does this array have?
//Answer: It has 3 dimensions.

//How would you access the value 11?
console.log(nestedArray[3][0][1]);

// how would you access the value 5?
console.log(nestedArray[1][1]);

// How would you access the last element in the array without knowing the array's length?
console.log(nestedArray[nestedArray.length - 1]);

// How would you access the 3rd element in the array? What will that element's value be?
console.log(nestedArray[2]); // The value will be [7, 8, 9]


/* Functions */

/* Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

write a function named convertCtoF.
The function should take 1 argument.
The parameter should be named celsius.

Your function needs to accept an argument of a temperature in Celsius, and return the equivalent temperature in Fahrenheit
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
convertCtoF(30); should return 86;
*/

function convertCtoF(celsius) {
    return celsius * 9/5 + 32;
}

console.log(convertCtoF(30)); // should return 86
