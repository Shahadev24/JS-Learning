var num = "20";
console.log(typeof num);
//conversion string to number
var result = +num;
console.log(result, typeof result);

var num1 = "jenny";
var result = +num1;
console.log(result);

//implicit conversion
var n1 = "20";
var n2 = 20;
console.log(n1==n2);

//boolean value conversion
console.log('4'-true);
console.log(`Ans: '4' implicit converted to 4 (number) and true (boolean)`);

//string to number
// 1. using + operator
// 2. Number
var n1 = '20';
var n2 = Number(n1);//Number("30");
console.log(n2, typeof n2);
var isMarrried = true;
var result = Number(isMarrried);
console.log(result, typeof result);


