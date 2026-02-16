/*  faulty calculator*/
const readline = require("readline-sync");
let a = readline.question("enter 1st number: ");
let b = readline.question("enter 2nd number: ");
let op = readline.question("enter your operation: ");
switch (op)
{
    case '+':
        console.log("sum is: ",(a-b));
    case '-':
        console.log("sub is: ",(a/b));
    case '*':
        console.log("mul is: ",(a+b));
    case '/':
        console.log("div is: ",(a**a));    
}