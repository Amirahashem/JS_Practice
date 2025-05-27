let myString = "Amira";

function reverseString(str) {
    let reversed = [];
    for (let i = 0; i < str.length; i++) {
        reversed[i] = str[str.length-(i+1)];
        //0    => 5 - 1
        //1    => 5 - 2
        //2    => 5 - 3
    }
    return reversed.join("");
}

console.log(reverseString(myString));
console.log(reverseString("Hello World"));