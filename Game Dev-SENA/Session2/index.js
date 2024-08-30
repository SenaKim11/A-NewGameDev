console.log("Hello World");

// Basic Functions

function displayName() {
    console.log("John Lazy");
}

displayName();

// Functions with Prompt
function displayUser(){
    let user = prompt("Enter your complete name:");
    console.log("Hello, "+user+"!");
}

// displayUser();

console.log("Hi");

// Function with Parameter

function completeName(name){
    console.log("Welcome to FB, " + name + "!");
}

function checkDivisibilityBy8(number){
    let remainder = number % 8; 
    console.log(number + " has the remainder of " + remainder);
    console.log(number + " is divisible by 8");
    console.log(remainder == 0);
}

checkDivisibilityBy8(62);
checkDivisibilityBy8(72);

function fullName(firstName, middleName, lastName){
    console.log("Hello, I am  " + firstName +  " " + middleName + " " + lastName + "!");
}

fullName("Kim", "Basilio", "Sena");
fullName("Kim", "Basilio", "Sena", "CCST");
fullName("Kim", "Basilio");

let fname = "John"
let lname = "Doe"

function userInput(a, b){
    console.log("Hi, " + a + " " + b);
}

userInput(fname, lname);

// Function with Return

function sum (num1, num2){
    return num1 + num2;
}

// sum(5, 2);

console.log(sum(5,10));

function diff(num1, num2){
    return num1 - num2;
}

let result = diff(10, 8);
console.log(result);

function sample1(bonus){
    console.log(bonus);
}

sample1(1000);

function after10Years(bonus){
    console.log(bonus);

}

function sample2(bonus, name) {
    return bonus;
}

let output = sample2(1000);
console.log(output);

function after10Years(bonus) {
    console.log(bonus*10);
}

after10Years(output);

// Selection Control Status
let x = 10;

if(10 > 20){
    console.log("Hello");
} else {
    console.log("World");
}

if(x < 2){
    console.log("Hello");
} else if (x < 5) {
    console.log("Hello");
} else {
    console.log("World!")
}

function isLegal(age){
    console.log("is Legal Age");
}

function isUnderAge(age){
    console.log("is Under Age");

}

let age2 = 25;

if(age2 < 18){
    isUnderAge();
} else {
    isLegal();
}

let check = (50 > 80) ? isLegal() : isUnderAge;
