// Importing stringCalculator module from add.js
const calculator = require("./add");

test(`Evaluates the output to 0 the input is empty string -> "" `, ()=>{
    expect(calculator.calc()).toEqual(0);
})

test("Evaluates input string of size 1 or 2 separated by comma", () => {
    //If the expression is "10" it will return 10 as output and if the expression is "10,10"
    //result will be 20.


    var expression = "42"; //Taking any arbitrary value to test this case.
    var result = 42;          //The sum of the numbers taken.
    expect(calculator.calc(expression)).toEqual(result);
})


//Allow the add module to handle any amount of numbers.

test("Evaluates string of  comma-separated numbers", () => {
    var expression = "10,10,10,10,10,10,10,10,10,10";
    var result = 100;
    expect(calculator.calc(expression)).toEqual(result);
})