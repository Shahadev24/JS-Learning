function stringHandsOn(){
    var str = "    Hey you are doing good, keep it up     ";
    console.log(`1. The given string is : '${str}'`);
    var length = str.length;
    console.log(`2. The length of given string is : '${length}'`);
    var str1 = str.trim();
    console.log(`3. After removing extra spaces string is : '${str1}'`);
    var removeLength = str1.length;
    var result = length - removeLength;
    console.log(`4. total spaces removed : ${result}`);
    // var result = removeLength.substring(1, removeLength.length-1);
    var firstChar = str1.charAt(0);
    var lastChar = str1.charAt(str1.length-1);
    console.log(`5. The first and last character is : '${firstChar}' and '${lastChar}'`);
    var words = str1.split(" ");
    var result = words.length;
    console.log(`6. Total words in given string is : ${result}`);
    console.log(`7. The index of word 'good' is : ${str1.indexOf('good')}`);
    console.log(`8. substring starting from index 22 is : '${str1.slice(22)}'`);
    console.log(`9. string ends with after removing extra spaces : ${str1.endsWith("up")}`);
    console.log(`10. string starts with after removing extra spaces : ${str1.startsWith("Hey")}`);
}
stringHandsOn();