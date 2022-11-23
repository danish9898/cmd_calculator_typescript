import { question } from "readline-sync"; //  use this for the input ,It provide buildin method

// type Operator = "+" | "-" | "*" | "/"; // we also use for pre define operation for more reeadable and use as calculator function parameter (operator : Operator) and calculator function calculate(firstNum, operator as Operator, secondNum)

function calculate(firstNum: number, operator: string, secondNum: number) {
  switch (
    operator // Alternative of switch is if else condition
  ) {
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

function main(): void {
  const firstStr: string = question("Enter the first number:\n");
  const operator: string = question("Enter operation:\n");
  const secondStr: string = question("Enter secondnumber:\n");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator, secondNum);
    console.log("Result = " + result);
  } else {
    console.log("\ninvalid input\n");
    main();
  }
}

main();
