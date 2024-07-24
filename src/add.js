// Implementation of simple stringCalculator method

function stringCalculator(expression){
    if (!expression || expression.length === 0){
        return 0;
    }
    const splitExpression = expression.split(",");
    return (parseInt(splitExpression[0]) + parseInt(splitExpression[1])) || parseInt(expression);
}

module.exports = {
    calc: stringCalculator
}