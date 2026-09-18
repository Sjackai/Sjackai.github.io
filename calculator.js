// Creates an array to store all of my calculations
let calculations = [];

// Creates an array to store only the valid results
let validResults = [];

// Keeps asking the user for calculations until they click cancel
while (true) {

    // Asks the user for the first number
    let x = prompt("Enter the first number:");

    // Stops the loop if the user clicks cancel
    if (x === null) {
        break;
    }

    // Asks the user for the second number
    let y = prompt("Enter the second number:");

    // Stops the loop if the user clicks cancel
    if (y === null) {
        break;
    }

    // Asks the user what math operator they want to use
    let operator = prompt("Enter an operator (+, -, *, /, %):");

    if (operator === null) {
        break;
    }

    // Changes the inputs from text into numbers
    let number1 = Number(x);
    let number2 = Number(y);

    // Creates a variable for the answer
    let result;

    // Checks if either input is not a number
    if (isNaN(number1) || isNaN(number2)) {

        result = "Error: Invalid number";

    } else {

        // Checks which operator the user entered
        switch (operator) {

            // Adds the two numbers
            case "+":
                result = number1 + number2;
                break;

            // Subtracts the two numbers
            case "-":
                result = number1 - number2;
                break;

            // Multiplies the two numbers
            case "*":
                result = number1 * number2;
                break;

            // Divides the two numbers
            case "/":
                if (number2 === 0) {
                    result = "Error: Cannot divide by zero";
                } else {
                    result = number1 / number2;
                }
                break;

            // Finds the remainder of the two numbers
            case "%":
                if (number2 === 0) {
                    result = "Error: Cannot divide by zero";
                } else {
                    result = number1 % number2;
                }
                break;

            // Shows an error if the operator is not allowed
            default:
                result = "Error: Invalid operator";
        }
    }

    // Stores the calculation so it can be shown in the table
    calculations.push({
        x: x,
        operator: operator,
        y: y,
        result: result
    });

    // Only adds valid answers to the results array
    if (typeof result === "number") {
        validResults.push(result);
    }
}


// Creates the heading for my calculation table
document.write("<h2>Calculation Results</h2>");

// Starts the calculation table
document.write("<table>");

// Creates the headings for each column
document.write(
    "<tr>" +
    "<th>Number 1</th>" +
    "<th>Operator</th>" +
    "<th>Number 2</th>" +
    "<th>Result</th>" +
    "</tr>"
);

// Goes through all of the calculations
for (let i = 0; i < calculations.length; i++) {

    // Creates a new table row for each calculation
    document.write(
        "<tr>" +
        "<td>" + calculations[i].x + "</td>" +
        "<td>" + calculations[i].operator + "</td>" +
        "<td>" + calculations[i].y + "</td>" +
        "<td>" + calculations[i].result + "</td>" +
        "</tr>"
    );
}

// Ends the calculation table
document.write("</table>");


// Creates the heading for the summary table
document.write("<h2>Summary</h2>");

// Variables used for my summary
let min;
let max;
let total = 0;
let average;

// Checks if there are any valid results
if (validResults.length > 0) {

    // Finds the smallest and largest answers
    min = Math.min(...validResults);
    max = Math.max(...validResults);

    // Goes through all valid results
    for (let i = 0; i < validResults.length; i++) {
        total += validResults[i];
    }

    // Finds the average of all valid results
    average = total / validResults.length;

} else {

    // Shows N/A if there were no valid calculations
    min = "N/A";
    max = "N/A";
    average = "N/A";
    total = "N/A";
}

// Starts my summary table
document.write("<table>");

// Creates the headings for the summary table
document.write(
    "<tr>" +
    "<th>Minimum</th>" +
    "<th>Maximum</th>" +
    "<th>Average</th>" +
    "<th>Total</th>" +
    "</tr>"
);

// Shows the summary results in the table
document.write(
    "<tr>" +
    "<td>" + min + "</td>" +
    "<td>" + max + "</td>" +
    "<td>" + average + "</td>" +
    "<td>" + total + "</td>" +
    "</tr>"
);

// Ends my summary table
document.write("</table>");