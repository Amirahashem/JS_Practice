/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

// q1
let swappingCases = "elZERo";

let sw = swappingCases.split("").map(function (ele) {
    return ele === ele.toUpperCase()? ele.toLowerCase() : ele.toUpperCase();
}).join("");

console.log(sw);

// q2
let invertedNumbers = [1, -10, -20, 15, 100, -30];

let invertNums = invertedNumbers.map(e => -e);

console.log(invertNums);


// q3
let ignoreNumbers = "Elz123er4o";

// let ignorNums = ignoreNumbers.split("").map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");

// Arrow Function Version => q3

let ignorNums = ignoreNumbers.split("").map(e => isNaN(parseInt(e)) ? e : "").join("");

console.log(ignorNums);