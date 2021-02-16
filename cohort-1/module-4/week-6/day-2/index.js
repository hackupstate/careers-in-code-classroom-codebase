// (5 + 5) * 7

const input = "7 5 5 + *";

const separatedInput = input.split(" ");
const stack = [];

for (let i = 0; i < separatedInput.length; i++) {
  const token = separatedInput[i];
  let a, b;
  if (!isNaN(parseFloat(token))) {
    // We know it's a number if it's "not not a number"
    stack.push(parseFloat(token));
  } else if (token === "+") {
    a = parseFloat(stack.pop());
    b = parseFloat(stack.pop());
    stack.push(a + b);
  } else if (token === "-") {
    a = parseFloat(stack.pop());
    b = parseFloat(stack.pop());
    stack.push(a - b);
  } else if (token === "*") {
    a = parseFloat(stack.pop());
    b = parseFloat(stack.pop());
    stack.push(a * b);
  } else if (token === "/") {
    a = parseFloat(stack.pop());
    b = parseFloat(stack.pop());
    stack.push(a / b);
  } else if (token === "^") {
    a = parseFloat(stack.pop());
    b = parseFloat(stack.pop());
    stack.push(Math.pow(a, b));
  } else {
    throw new Error("Invalid input!");
  }
}

// By this point the stack should only have the final value
if (stack.length > 1) {
  console.log(stack);
  throw new Error("Invalid input!");
} else {
  console.log(stack[0])
}

