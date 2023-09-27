console.log("============================= Assignment-1  ================================");

console.log("   ");
console.log("============== step 1 ==============");
function squareOfWorldLength(string){
    var str = string;
    var length = str.length;
    var square = length * length;
    var result = console.log("The given string is :", str, "and the square of the world length is :", square);
    return result;
}

console.log("========= 1st value ==========");
squareOfWorldLength("javaScript");
console.log("========= 2nd value ==========");
squareOfWorldLength("Google Chrome");
console.log("========= 3rd value ==========");
squareOfWorldLength("Developer Smart");

console.log("   ");
console.log("============== step 2 ==============");
function string(){
    var str = "I am Angular Developer";
    var length = str.length;
    console.log("The given string is :", str);
    console.log("Length of the Given string is:", length);
    console.log("Total words in the given string is : 4");
    var div = length / 4;
    console.log("After dividing by total words in the given string to total string length :", div);
    var mul = length * 4;
    console.log("After multiplying by total words in the given string to total string length :", mul);
}
string();
