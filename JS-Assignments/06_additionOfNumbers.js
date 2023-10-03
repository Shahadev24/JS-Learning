//addition of 1 to 10 numbers
var sum = 0;
for (let i = 0; i <= 10; i++){
    sum += i;
}
console.log(`Addition of 1 to 10 is '${sum}'.`);

// Reverse the string
var str = "Developer";
var reverseStr = "";
for (let index = str.length-1; index >=0; index--) {
    reverseStr = reverseStr + str.charAt(index); 
}
console.log(`Reverse string is: ${reverseStr}`);

  
// Count the vowels
var str = "i am ui developer";
var count = 0;
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(char=='A' || char=='E' || char=='I' || char=='O' || char == 'U'){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

console.log(`=============================`);
var str = "I am ui developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);