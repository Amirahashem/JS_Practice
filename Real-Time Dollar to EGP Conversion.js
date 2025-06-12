// Real-Time Dollar to EGP Conversion

let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

// console.log(input);
// console.log(result);

function convertToEGP(dollarValue) {
    const exchangeRate = 50;

    const dollar = parseFloat(dollarValue);
    if(!isNaN(dollar)) {
        let pounds = (dollar * exchangeRate).toFixed(2);
        result.textContent = `{${dollar}} USD Dollar = {${pounds}} Egyptian Pound`;
    }else {
        result.textContent = `{0} USD Dollar = {0} Egyptian Pound`;
    }
}

input.oninput = function() {
    convertToEGP(this.value);
};
