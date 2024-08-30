/*
    4. Debug the following code to return the correct value and mimic the output.
        - Check the value’s data type.
        - Check the if the operator used is correct.
*/

let num1 = 25;
let num2 = 5;
let sum1 = num1 + num2;

console.log("The result of num1 + num2 should be 30.");
console.log("Actual Result:");
console.log(sum1);

let num3 = 156;
let num4 = 44;
let sum2 = num3 + num4;

console.log("The result of num3 + num4 should be 200.");
console.log("Actual Result:");
console.log(sum2);

let num5 = 17;
let num6 = 10;
let difference1 = num5 - num6;

console.log("The result of num5 - num6 should be 7.");
console.log("Actual Result:");
console.log(difference1);

let password = "gonpachiro";
let confirmPassword = "gonpachiro";

//match should contain the result of a comparison.
let match = password == confirmPassword;

console.log("Do the passwords match?");
console.log(match);

//Research the use of the string .length property.
let word= "supercalifragilisticexpialidocious";
let wordLength = word.length;

console.log("How many characters are in the word?")
console.log(wordLength);




/*
5. Research about Modulo Operator
- Declare a variable named number and assign any given number.
- Declare a variable named isDivisibleBySeven and initialize it to false.
- Use the modulo assignment operator to check if the given number is divisible by 7.
- Log the values of each variable to follow/mimic the output.
*/
let number = 14;
let isDivisibleBySeven = false;
console.log("is " + number + " divisible by 7? ");
console.log(number % 7 == 0);

/*
6. Research about Multiplication Assignment Operator
- Use the multiplication assignment operator to multiply the product by 4.
- Log the value of the total cost in the console to follow/mimic the output.
*/
let prod1 = 4
let product = 6;
let prod = prod1 * product;
console.log(prod);

/*
7. Research about Division Assignment Operator
- Using the variable quotient,use the division assignment operator to divide the quotient by 3.
- Log the value of the total cost in the console to follow/mimic the output.
*/
let quotient = 18;
quotient /= 3;
console.log(quotient);

/*
8. Research about Modulo/Remainder Assignment Operator
- Using the variable modulo,use the modulo assignment operator to get the remainder of the modulo by 3.
- Log the value of the total cost in the console to follow/mimic the output.
*/
let modulo = 10;
modulo %= 3;
console.log(modulo);

/*

9. Given the values below, calculate the total number of minutes in a year and save the result in a variable called resultMinutes.
- Log the result in the console.

*/
let minutesHour = 60;
let hoursDay = 24;
let daysWeek = 7;
let weeksMonth = 4;
let monthsYear = 12;
let daysYear = 365;
let minPerDay = minutesHour * hoursDay;
let minPerYear = minPerDay * daysYear;
console.log("There are " + minPerYear + " minutes in a year.");

/*
10. Given the values below, calculate convert the temperature from celsius to fahrenheit and save the result in a variable called resultFahrenheit.
- Log the value of the variable in the console.
*/
let tempCelsius = 132;
let tempFar = 0;
tempFar = (tempCelsius * (9/5) +32 );
console.log(tempCelsius + " degrees Celsius when converted to Farenheit is " + tempFar);

/*
11. Given the values below, identify if the values of the following variable are divisible by 8.
- Use a modulo operator to identify the divisibility of the number to 8.
- Save the result of the operation in an appropriately named variable.
- Log the value of the remainder in the console.
- Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy8
- Log a message in the console if num7 is divisible by 8.

*/
let num7 = 165;
//Log the value of the remainder in the console.


let remainder = num7 % 8;
console.log("The remainder of " + num7 + " divided by 8 is: " + remainder);
let isDivisibleBy8 = (remainder === 0);
let isDivisibleByEight = false;
console.log("is num7 divisible by 8? ");
console.log(number % 8 == 0);
/*
12. Given the values below, identify if the values of the following variable are divisible by 4.
- Use a modulo operator to identify the divisibility of the number to 4.
- Save the result of the operation in an appropriately named variable.
- Log the value of the remainder in the console.
- Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy4
- Log a message in the console if num8 is divisible by 4.

*/
let num8 = 348;
let remainder1 = num8 % 4;
console.log("The remainder when " + num8 + " is divided by 4: "+ remainder1);
let isDivisibleBy4 = (num8 % 4 === 0);
console.log("Is num8 divisble by 4?");
console.log(isDivisibleBy4);


/* 
13. Given the values below, calculate the average and identify if the average score is greater than 75.
    - Create a new variable called, "average".
    - Calculate the average of the group scores and save it in the average variable.
    - Log the value of average variable.
    - Create a new variable called isPassing.
    - Using a relational operator, display if the average score is greater than 75.
    - Log the value of the isPassing variable.

*/

let groupA_score = 75;
let groupB_score = 80;
let groupC_score = 76;
let groupD_score = 74;

let average = (groupA_score + groupB_score + groupC_score + groupD_score) / 4;
console.log("Average score of the group: " + average);
let isPassing = average > 75;
console.log("Average score of the group is greater than 75? " ,  average);

/*
     14. Create a function which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        -add parameters appropriate to describe the arguments.
        -create a new function scoped variable called average.
        -calculate the average of the 4 number inputs and store it in the variable average.
        -research the use of Math.round() and round off the value of the average variable.
            -update the average variable with the use of Math.round()
             -Do not use Math.floor().
            -console.log() the average variable to check if it is rounding off first.
        -add an if statement to check if the value of average is less than or equal to 74.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is F"
        -add an else if statement to check if the value of average is greater than or equal to 75 and if average is less than or equal to 79.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is D"
        -add an else if statement to check if the value of average is greater than or equal to 80 and if average is less than or equal to 84.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is C"
        -add an else if statement to check if the value of average is greater than or equal to 85 and if average is less than or equal to 89.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is B"
        -add an else if statement to check if the value of average is greater than or equal to 90 and if average is less than or equal to 95.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A"
        -add an else if statement to check if the value of average is greater than 96.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.
*/

function checkAverage(num1, num2, num3, num4) {
    let average = Math.round((num1 + num2 + num3 + num4) / 4);

    if(average <= 74) {
        return "Hello, student, your average is: " + average +". The letter equivalent is F"
    } else if(average >= 75 & average <= 79) {
        return "Hello, student, your average is: " + average +". The letter equivalent is D"
    } else if(average >= 80 & average <= 84) {
        return "Hello, student, your average is: " + average +". The letter equivalent is C"
    } else if(average >= 85 & average <= 89) {
        return "Hello, student, your average is: " + average +". The letter equivalent is B"
    } else if(average >= 90 & average <= 95) {
        return "Hello, student, your average is: " + average +". The letter equivalent is A"
    } else if(average > 96) {
        return "Hello, student, your average is: " + average +". The letter equivalent is A+"
    }
};

console.log("checkAverage(85, 89, 85, 87);");
console.log(checkAverage(85, 89, 85, 87));

console.log("checkAverage(95, 91, 95, 99);");
console.log(checkAverage(95, 91, 95, 99));

console.log("checkAverage(75, 81, 74, 78);");
console.log(checkAverage(75, 81, 74, 78));