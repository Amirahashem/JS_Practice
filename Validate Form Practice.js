let form = document.forms[0];
console.log(form);

let userInput = document.querySelector("[name='username']");
let userAge = document.querySelector("[name='age']");
console.log(userInput);
console.log(userAge);

form.onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    if(userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if(userAge.value !== "" && userAge.value >= 0) {
        ageValid = true;
    }

    if(userValid === false || ageValid === false) {
        e.preventDefault();
    }
}