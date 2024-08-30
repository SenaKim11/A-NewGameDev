// Repitition Control Structures
// Do-while, while, for loops

let name = "AlExAndEr";
console.log(name.length);

console.log(name[0]);
console.log(name[6]);

// WHILE LOOP
// let number = 0;

// while(number <= name.length) {
//     console.log(number);
//     number++;
// }

// DO WHILE

//     let input = Number(prompt("Enter a number: "));
//     console.log(input);


// do {
//     console.log(input);
//     input++;
// } while(input <= 100)


// For Loops

// for(let x = 0; x <= 5; x++){
// console.log("Current Iteration in " + x);
// }

// for (let x = 0; x < name.length; x++) {
//     console.log(name[x]);
// }

// for (let x = 0; x < name.length; x++){
//     if (name[x].toLowerCase() == "a" ||
//         name[x].toLowerCase() == "e" || 
//         name[x].toLowerCase() == "i" || 
//         name[x].toLowerCase() == "o" || 
//         name[x].toLowerCase() == "u") {
//             console.log(1);
//         } else {
//             console.log(name[x]);
//         }
       
// }

// for (let x = 0; x <= 100; x++){
//     if (x % 5 == 0) {
//         continue;
//     }

//     console.log(x);

//     if (x >= 75) {
//         break;
//     }
// }

let word = "supercalifragilisticexpialidocious";
let vowels = "";

for (let x = 0; x < word.length; x++) {
    if (word[x].toLowerCase() == "a" ||
        word[x].toLowerCase() == "e" || 
        word[x].toLowerCase() == "i" || 
        word[x].toLowerCase() == "o" || 
        word[x].toLowerCase() == "u") {
            continue;
        } else{
            vowels = vowels + word [x];
        }
}
console.log(vowels);

