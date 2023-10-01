var strName = "Vishal";
var result = typeof strName;
console.log(result);

var greet = "Good Morning";


console.log("========= length Property ==========");
var totalLength = greet.length;
console.log("length of the string is :", totalLength);

console.log("========= charAt() Function ==========");
var charAt0 = greet.charAt(0);
console.log('Char stored at index 0 is: ', greet.charAt(0));
console.log('Char stored at index 5 is: ', greet.charAt(5));

var lastIndexChar = greet.charAt(greet.length-1);
console.log('Last index char is: ', lastIndexChar);
console.log('Last 3rd index char is: ',greet.charAt(greet.length-3));

console.log("========== concatenation =============== ");
var firstName = "Jenny";
var lastName = " Gates"
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");
var indexOfM = greet.indexOf('M');
console.log('Index of M is: ', indexOfM);
console.log(greet.indexOf('nin'));
console.log('Index of char z:',greet.indexOf('z'));
console.log('Index of char D:',greet.indexOf('D'));
console.log('Index of char o is:', greet.indexOf('o'));

console.log("========== replace =============== ");
var result = greet.replace('Morning', 'Afternoon');
console.log(result);

console.log(greet.replace(" ", "_"));

console.log(greet.toLowerCase());
console.log(greet.toUpperCase());

console.log("========== trim() =============== ");
var str = "   Good Morning  ";
console.log("length of before trim :", str.length);
var result = str.trim();
console.log("Length after trim :", result.length);

console.log("======== include() ========");
var result = greet.includes("Morning");
console.log(" Is morning word available : ", result);
var result = greet.includes("Good");
console.log(" Is good word available : ", result);

console.log("======== search() ========");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('shivam');
console.log(result);

console.log("======== slice() ========");//some Part/ tukda
var greet = 'Hello Good Morning';
var result = greet.slice(6);
console.log(result);

var result = greet.slice(6, 10);
console.log(result);

console.log("======== split() ========");
var greet = 'Hello Good Morning';
var result = greet.split(' ');
console.log(result);

var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log(typeof words);
console.log("Total words is ", words.length);

console.log("======== String Template ========");
console.log(`I am "UI" Developer`);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
// console.log("Addition of", num1, "and", num2, "is : ", result);
//Using the string template 
console.log(`Addition of ${num1} and ${num2} is : "${result}" `);




