"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync"); //  use this for the input ,It provide buildin method
// type Operator = "+" | "-" | "*" | "/"; // we also use for pre define operation for more reeadable and use as calculator function parameter (operator : Operator) and calculator function calculate(firstNum, operator as Operator, secondNum)
function validOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter the first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operation:\n");
    var secondStr = (0, readline_sync_1.question)("Enter secondnumber:\n");
    var operatorResponse = false;
    var validInput = !isNaN(parseInt(firstStr)) &&
        validOperator(operator) &&
        !isNaN(parseInt(secondStr));
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        // const result = calculate(firstNum, operator, secondNum);
        // console.log("Result = " + result);
        var result = 0;
        switch (operator // Alternative of switch is if else condition
        ) {
            case "+":
                result = firstNum + secondNum;
                console.log("Result : " + result);
                return;
            case "-":
                result = firstNum - secondNum;
                console.log("Result : " + result);
                return;
            case "*":
                result = firstNum * secondNum;
                console.log("Result : " + result);
                return;
            case "/":
                result = firstNum / secondNum;
                console.log("Result : " + result);
                return;
        }
    }
    else {
        console.log("\ninvalid input\n");
        main();
    }
}
main();
