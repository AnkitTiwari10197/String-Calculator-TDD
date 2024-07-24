// Implementation of simple stringCalculator method

function stringCalculator(expression){
    if (!expression || expression.length === 0){
        return 0;
    }

    //Handling more than 2 input as well in the input string like "10,10,10,10"
    const splitExpression = expression.split(","); //Here the delimiter is comma ","
    var sum = 0;
    for (let element of splitExpression){
        sum+=parseInt(element);
    }
    return sum;
}

module.exports = {
    calc: stringCalculator
}