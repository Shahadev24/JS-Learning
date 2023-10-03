// wap to count vowels.


console.log("*****Step - 1******");
var str = "I am very good IT Developer";
var count = 0;
var vowels ="AEIOU"; 
for (let i = 0; i < str.length-1; i++) {
    var char = str.charAt(i).toUpperCase();
    // if(vowels.includes(char))
    if (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U ') {
    count += 1;
}    
}
console.log(`Count of vowels is :- ${count}`);
console.log(" ");



console.log('=======Step - 2 =======');
function sumOfCube(){
    var sum = 0;
    for(let i = 1; i <= 5; i++){
        const cube = i * i * i;
        sum += cube;
    }
    console.log(`sum of cube of 1 to 5 numbers is : ${sum}`);

}
sumOfCube();
console.log(" ");


console.log(`======step - 3======`);
function oddPositionChar(str){
    var result = '';
    for(let i = 0; i < str.length; i++){
        if (str[i] != ' ' && i % 2 != 0) {
            result +=str[i];
        }  
    }
    console.log(`Odd position characters : ${result});  
}
oddPositionChar('Hard work always pays back');
oddPositionChar('Soon I will be UI IT Champ')

















































// // wap to reverse string.
// console.log("******reverse the string******");
// var str = 'Shahadev';
// var reverse = " ";
// for( let i = str.length - 1; i >= 0; i--){
//     reverse += str.charAt(i)
// }
// console.log(`Reverse string is : ${reverse}`);
// console.log(" ");

// // wap to print the sum of numbers
// console.log("******sum of numbers******");
// var sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(`Sum of first 10 numbers is : ${sum}`);
