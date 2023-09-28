console.log(`***********************Step 1***********************\n`);
function greaterNumber(arg1, arg2){
    var num1= arg1;
    var num2= arg2;
    var grater= arg1>arg2 ? `${num1} is grater` : `${num2} is grater`;
    console.log(`The provided numbers are ${num1} & ${num2}, the result of grater number is as above-> ${grater}\n`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`***********************Step 2***********************\n`);

function isEvenOrOddNum(val){
    var num= val;
    var result=num%2==0 ? `Provided number ${num} is Even` : `Provided number ${num} is Odd`;
    return result;  
}
var oddEven= isEvenOrOddNum(29);
console.log(`The number is Even or Odd?- ${oddEven}\n`);
var oddEven= isEvenOrOddNum(44);
console.log(`The number is Even or Odd?- ${oddEven}\n`);
var oddEven= isEvenOrOddNum(0);
console.log(`The number is Even or Odd?- ${oddEven}\n`);
var oddEven= isEvenOrOddNum(101);
console.log(`The number is Even or Odd?- ${oddEven}\n`);

console.log(`***********************Step 3***********************\n`);
function wordLength(arg){
    var str = arg;
    var strLength = str.length;
    var evenOdd= strLength%2==0 ? `The string "${str}" length is Even` : `The string "${str}" length is Odd`;
    return evenOdd;
}
var result=wordLength("JavaScript");
console.log(`${result}`);
var result=wordLength("developer");
console.log(`${result}`);
var result=wordLength("Google");
console.log(`${result}`);