console.log("===============Function Expression Assignment ================");
console.log("********* step-1 **********");
var square = function(value){
    console.log(`The square of ${value} is ${value * value}`);
};
square(5);
square(6);
square(25);
square(100);
square(67);
square(89);
square(59);

console.log(" ");
console.log("********* step-2 **********");
console.log(`The type of square variable is :- ${typeof square}`);

console.log(" ");
console.log("********* step-3 **********");
var areaOfRectangle = function(){
    var length = 499;
    var width = 917;
    var result = length * width;
    console.log(`Area of Rectangle is :- ${result}`);
}
areaOfRectangle();

console.log(" ");
console.log("********* step-4 **********");
var swapValues = function(value1, value2){
    console.log(`Values before the Swap '${value1}' and '${value2}'`);
    var temp = value1;
    value1 = value2;
    value2 = temp
    console.log(`Values after the Swap '${value1}' and '${value2}'`);
}
swapValues("Mahi", "Raina");
swapValues(55, 77)

console.log(" ");
console.log("********* step-5 **********");
var string = function(){
    var str = "JS the most popular language of Internet";
    var length = str.length;
    console.log(`A - Total character available in the string :- ${length}`);
    var index = str.charAt(6);
    console.log(`B - The character at the index 6 is :- '${index}'`);
    var index = str.charAt(11);
    console.log(`C - The character at the index 11 is :- '${index}'`);
    var lastChar = str.charAt(length-1);
    console.log(`D - The last character using length property :- '${lastChar}'`);
    var firstChar = str.charAt(0);
    console.log(`E - The First character is :-'${firstChar}'`);
    var lastThirdChar = str.charAt(length-3);
    console.log(`F - The third last character is :- '${lastThirdChar}'`);
    var words = str.split(" ");
    var tWords = words.length;
    var result = tWords * tWords;
    console.log(`G - The total words in the string is :- '${tWords}' and the square of it is '${result}'`);

}
string();
