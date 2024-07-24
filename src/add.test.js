// Importing stringCalculator module from add.js
const calculator = require("./add");

test(`Evaluates the output to 0 the input is empty string -> "" `, ()=>{
    expect(calculator.calc()).toEqual(0);
})
