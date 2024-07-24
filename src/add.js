// Implementation of simple stringCalculator method

function stringCalculator(expression){
    if (!expression || expression.length === 0){
        return 0;
    }

    let delimiter = /[,|\n]/;  // Default delimiters: comma or newline
    let numbers = expression;

    // Check for custom delimiter format at the beginning of the string
    if (expression.startsWith("//")) {
        // Finding the end of the delimiter definition
        const endIndexOfDelimiter = expression.indexOf("\n");
        
        // Extract the custom delimiter part of the string (after // and before \n)
        const customDelimiter = expression.substring(2, endIndexOfDelimiter);

        // Use the custom delimiter to create a RegExp object for splitting
        // Escape special characters in delimiter if any
        const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(escapedDelimiter);
        
        // Extract the numbers part of the string after the delimiter definition
        numbers = expression.substring(endIndexOfDelimiter + 1);
    }
    const splitExpression = numbers.split(delimiter);
    var sum = 0;
    for (let element of splitExpression){
        sum += parseInt(element);
    }
    return sum;

}

module.exports = {
    calc: stringCalculator
}