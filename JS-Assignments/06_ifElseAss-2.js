function gradeCalculation(marks){
    if (marks >= 90) {
        console.log(" ");
        console.log(`======= A =======`);
        console.log(`Fantastic marks : '${marks}', Your grade is A+.`);
    }
    else if(marks >+ 75 && marks <= 90){
        console.log(" ");
        console.log(`======= B =======`);
        console.log(`Excellent marks ${marks}, your grade is A.`);
    }
    else if(marks >= 50 && marks <= 75){
        console.log(" ");
        console.log(`======= C =======`);
        console.log(`Good marks ${marks}, Your grade is B.`);
    }
    else if(marks >= 35 && marks <= 50){
        console.log(" ");
        console.log(`======= d =======`);
        console.log(`Marks is ${marks}, Your grade is C, You need improvement,`);
    }
    else if(marks == 0 || marks < 0 || marks > 100 || (isNaN(marks) && marks == null && marks == undefined )){
        console.log(" ");
        console.log(`======= E =======`);
        console.log(`Please provide a valid marks.`);
    }
    else {
        console.log(" ");
        console.log(`Your fail.`);
    }

}
gradeCalculation(98);

gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);