import { question } from "readline-sync";

// type Operator = "+" | "-" | "*" | "/"; // we also use for pre define operation for more reeadable and use as calculator function parameter (operator : Operator) and calculator function calculate(firstNum, operator as Operator, secondNum)

function main(): void {
  const firstStr: string = question("Enter the first number:\n");
  const operator: string = question("Enter operation:\n");
  const secondStr: string = question("Enter secondnumber:\n");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  if (validInput) {
    console.log("valid");
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator, secondNum);
    console.log(result);
  } else {
    console.log("\ninvalid input\n");
    main();
  }
}
function calculate(firstNum: number, operator: string, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

function isOperator(operator: string): boolean {
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
function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}
main();
