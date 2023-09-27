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