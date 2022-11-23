import { question } from "readline-sync"; //  use this for the input ,It provide buildin method
// Simple calculator in a single program
// type Operator = "+" | "-" | "*" | "/"; // we also use for pre define operation for more reeadable and use as calculator function parameter (operator : Operator) and calculator function calculate(firstNum, operator as Operator, secondNum)
function validOperator(operator: string): boolean {
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
function main(): void {
  const firstStr: string = question("Enter the first number:\n");
  const operator: string = question("Enter operation:\n");
  const secondStr: string = question("Enter secondnumber:\n");
  let operatorResponse: boolean = false;
  const validInput: boolean =
    !isNaN(parseInt(firstStr)) &&
    validOperator(operator) &&
    !isNaN(parseInt(secondStr));
  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    let result = 0;
    switch (
      operator // Alternative of switch is if else condition
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
  } else {
    console.log("\ninvalid input\n");
    main();
  }
}
main();
