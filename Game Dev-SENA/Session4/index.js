//  console.log("Hello World!");

// function checkEvenNumbers(number) {
//     for (let x = 0; x <= number; x++) {
//         if(x % 2 == 0) {
//             console.log("Count: " + x + " is an EVEN NUMBER");
//         } if (x % 2 != 0) {
//             // console.log("Count: " + x);
//             if(x % 5 == 0) {
//                 console.log(x + "is an ODD NUMBER divisible by 5");
//             } else {
//                 console.log(x);
//             }
//         }
//     }
// }

function checkEvenorOdd(number) {
    let even = 0;
    let odd = 0;
    let divisibleoddby5 = 0;

    for (let x = 0; x <= number; x++) {
        console.log("Current Count: " + x);
        if(x % 2 == 0) {
            even += x;
        } if (x % 2 != 0) {
            odd += x;
                if (x % 5 == 0) {
                    divisibleoddby5 += x;
                } 
        }
    }
        console.log("Total of even numbers: " + even);
        console.log("Total of odd numbers: " + odd);
        console.log("Total of divisible by 5 odd numbers: " + divisibleoddby5);
}