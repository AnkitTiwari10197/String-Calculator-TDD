// Implementation of simple stringCalculator method

function stringCalculator(expression){
    if (!expression || expression.length === 0){
        return 0;
    }

    //Handling mix of new line delimiters and comma delimeter in input string.
    const splitExpression = expression.split(/[\n | ,]/); //Use RegExp to handle multiple delimeters.
    var sum = 0;
    for (let element of splitExpression){
        sum+=parseInt(element);
    }
    return sum;
}

module.exports = {
    calc: stringCalculator
}