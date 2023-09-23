console.log("------------- Function Assignment no. 1 --------------");
console.log("======= step 1=======");
console.log(" function 1 ");
function addition(){
    var a = 10;
    var b = 42.5;
    var c = a + b;
    console.log("Addition of a and b is ==>", c);
}
addition();

console.log(" function 2 ");
function javaScript(){
    console.log("javascript is most popular language over the internet.");
}
javaScript();

console.log("============ Step 2 =============");
function personalDetails(firstName, lastName, collegeName){
    console.log("First Name ==>", firstName);
    console.log("Last Name ==>", lastName);
    console.log("College Name ==>", collegeName);
}
personalDetails("Shahadev", "Warkhade", "Alard College of Business Studies");

console.log("========== Step 3 ==========");
console.log("***********first************");
function swapValues(value1, value2){
    console.log("Before swap values : ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap Values :", value1, value2);
}
swapValues("Virat", "Anushka");
console.log("***********Second************");
swapValues(1000, 2000);

console.log("========== Step 4 ==========");
console.log("*********First*********")

function addThreeValues(value1, value2, value3){
    var addition = (value1 + value2 + value3);
    return addition;
}
var result = addThreeValues(10.23, 600, 40);

console.log("Addition of three values ==>", result);

console.log("*********second*********")
var result = addThreeValues(" Hello", " Good", " Morning");
console.log("Addition of three values ==>", result);
