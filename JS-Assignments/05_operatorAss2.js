console.log("=================== Assignment-2 =====================");

console.log(" ");
console.log("********** Task-01 ************");

function greaterNumber(num1, num2){
    if(num1 > num2){
        console.log("Between 10 and -10 the greater number is :-", num1);
    }
    else{
        console.log("Between 10 and -10 the greater number is :-", num2);

    }
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(" ");
console.log("********** Task-01 ************");
function isEvenOrOddNum(num){
   if(num % 2 == 0){
    console.log("the given number", num, "is even :- true");
   }
   else{
    console.log("the given number", num, "is odd :- false");
   }
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("   ");
console.log("********** Task-01 ************");
function wordLength(word){
    var length = word.length;
    if(length % 2 == 0){
        console.log("The given word", word, "length is :- EVEN",);
    }
    else{
        console.log("The given word", word, "length is :- ODD");
    }
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
