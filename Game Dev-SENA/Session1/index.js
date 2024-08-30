// Java is a synchronous programming language

console.log ("Hello World");

// JS is a loose type language

console.log ("Hello World")

//  Data Types

let number = 10;
console.log(number)

let name = "Kim";
console.log(name);

console.log(typeof number);
console.log(typeof name);

// proper naming convention
let hoursInADay = 24;

// inproper variable naming

let foo = true;

let grade = 99.65;
console.log(typeof grade);

// Array
let student1 = "Jane";
let student2 = "Jane3";
let student3 = "Jane4";

let students = ["Jane","Peter","Mark"];
console.log(students)

// Values should be of the same type

let mixArray = ["Peter", 4, true, null];
console.log(mixArray);


// JS Objects
let person = {
    fullName: "John Lazy",
    age: 4,
    address: "San Fernando, Philippines",
    isLegal: false
};

console.log(person);

// Arithmetic Operators
let num1 = 10;
let num2 = 2;

let sum = num1 + num2;
console.log(sum);

let diff = num1 - num2;
console.log(diff);

let prod = num1 * num2;
console.log(prod);

let qou = num1 / num2;
console.log(qou);

// Relational Operators
console.log(1<5);
console.log(5>100);

// Equality Operators
let sample1 = 50;
let sample2 = "50";

console.log(sample1 == sample2);

console.log(sample1 === sample2);

// Logical Operators
let isMarried = false;
let isLegalAge = true;

console.log(isLegalAge && isMarried);
console.log(isLegalAge || isMarried);

// Basic Functions
function addTwoNumbers(){
    let num1 = 3;
    let num2 = 2;
    console.log(num1 + num2);
}

// Invocation -> call the function
addTwoNumbers();
addTwoNumbers();
addTwoNumbers();
addTwoNumbers();
addTwoNumbers();

// Function with Parameter
function add(num1, num2){
    console.log(num1 + num2);
}

add(30,70);
add(50,60);
add(380,70);
add(120,842);
add(10,15);
