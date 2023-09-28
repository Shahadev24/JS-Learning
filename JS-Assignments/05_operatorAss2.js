console.log("=================== Assignment-2 =====================");
console.log("********** Task-01 ************");

function greaterNumber(num1, num2){
    var result = num1 > num2 ?
    `Between ${num1} and ${num2} the greater number is ${num1}`:
    `Between ${num1} and ${num2} the greater number is ${num2}`;
    console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(" ");
console.log("********** Task-02 ************");
function isEvenOrOddNum(num){
   var result = num % 2 == 0 ?
    `the given number ${num} is even :- TRUE`:
    `the given number ${num} is odd :- false`;
    console.log(result);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("   ");
console.log("********** Task-03 ************");
function wordLength(word){
    var length = word.length;
    var result = length % 2 == 0 ?
    `The given word ${word} length is :- EVEN`:
    `The given word ${word} length is :- ODD`;
    console.log(result);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
