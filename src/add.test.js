// Importing stringCalculator module from add.js
const calculator = require("./add");

/********************************************************************************/
test(`Evaluates the output to 0 the input is empty string -> "" `, ()=>{
    expect(calculator.calc()).toEqual(0);
})

/********************************************************************************/




/********************************************************************************/
test("Evaluates input string of size 1 or 2 separated by comma", () => {
    //If the expression is "10" it will return 10 as output and if the expression is "10,10"
    //result will be 20.


    var expression = "42"; //Taking any arbitrary value to test this case.
    var result = 42;          //The sum of the numbers taken.
    expect(calculator.calc(expression)).toEqual(result);
})
/********************************************************************************/





/********************************************************************************/
//Allow the add module to handle any amount of numbers.

test("Evaluates string of  comma-separated numbers", () => {
    var expression = "10,10,10,10,10,10,10,10,10,10";
    var result = 100;
    expect(calculator.calc(expression)).toEqual(result);
})
/********************************************************************************/





/********************************************************************************/
//Allowing the add module to handle new lines between numbers (instead of commas). 
//Like -> ("1\n2,3" should return 6), \n represents new line and sum is 6.

test("Evaluates string of comma and newline-separated numbers", () => {
    var expression = "1\n2,3";
    var result = 6;
    expect(calculator.calc(expression)).toEqual(result);
})
/********************************************************************************/





/********************************************************************************/
//  To change the delimiter, the beginning of the string will contain a separate line 
//  that looks like this: "//[delimiter]\n[numbers…]". 
//  For example, "//;\n1;2" where the delimiter is ";" should return 3.

test("Evaluates string with custom delimiter", () => {
    var expression = "//;\n1;2;3";
    var result = 6;
    expect(calculator.calc(expression)).toEqual(result);
});
/********************************************************************************/






/********************************************************************************/
// Handling Negative Numbers when encountered in input string
// To Handle it we throw an exception.

test("Throws an exception for negative numbers while calling stringCalculator(expression) function", () => {
    var expression = "1,-2,3,-4,5";
    // In expect method arrow function is used to catch exceptions otherwise error will not be caught.
    expect(() => calculator.calc(expression)).toThrow("negative numbers not allowed: -2, -4");
});

test("Throws an exception for negative numbers with custom delimiter while calling stringCalculator(expression) function", () => {
    var expression = "//;\n1;-2;3;-4;5";
    expect(() => calculator.calc(expression)).toThrow("negative numbers not allowed: -2, -4");
});

/********************************************************************************/