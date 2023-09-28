console.log("=========== Operator ternary assignment - 3 ===========");
function maleMarriageEligibility(gender, age, name){
   var result = gender = "Male" && age >= 21 ?
    `Hey "${name}", Congratulation!. You are eligible for marriage.` :
    `Hey "${name}" you are not eligible for marriage, Please try next time.`;
    console.log(result);
}

console.log(" ");
console.log("************* Step-1 :- Male Marriage Eligibility **************");
maleMarriageEligibility("Male", 21, "Bill Gates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log(" ");
console.log("************* Step-2 :- Female Marriage Eligibility **************");
function femaleMarriageEligibility(gender, age, name){
    var result = gender = "Female" && age >= 18 ?
    `Hey "${name}",Congratulation!. You are eligible for marriage.` :
    `Hey "${name}" you are not eligible for marriage, Please try next time.`;
     console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");