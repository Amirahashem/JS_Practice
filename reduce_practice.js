/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// q1
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
// let theLongest = "";

// for (let i = 0; i< theBiggest.length; i++) {
//     if(theBiggest[i].length > theLongest.length) {
//         theLongest = theBiggest[i];
//     }
// }
// console.log(theLongest);

theLongest = theBiggest.reduce(function (acc, current) {
    return acc.length > current.length ? acc : current;
})

console.log(theLongest);

// q2
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let str = removeChars.filter(function (ele) {
    return ele !== "@";
}).reduce(function (acc, current) {
    return acc + current;
})

console.log(str);


// arrow function version

let finalSting = removeChars.filter(e => e !== "@").reduce((acc, current) => acc + current);

console.log(finalSting);