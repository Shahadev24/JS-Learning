var leapYear = function(year) {
    if (year === null || isNaN(year) || year === undefined) {
        console.log(`'${year}' is Invalid Input`);
    } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(`'${year}' is a Leap Year`);
    } else {
        console.log(`'${year}' is not Leap Year`);    }
}

leapYear(2020);         // This is a Leap Year
leapYear(1999);         // Invalid Input
leapYear(null);        // This is not a Leap Year
leapYear(1600);         // This is a Leap Year
leapYear(undefined);    // Invalid Input
leapYear(2022);         // This is not a Leap Year
leapYear(1945);         // This is not a Leap Year                       
leapYear("Twenty Twenty");  // Invalid Input
leapYear(1750);         // This is not a Leap Year
leapYear(NaN);          // Invalid Input

console.log(" ");
console.log("*******leap year using switch case*******");
let dayCount;
function leapYear(month, year){
    switch (year) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayCount = 31;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            dayCount = 30;
            break;

        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ){
                dayCount = 29;
            }
            else{
                dayCount = 28;
            }
            break;

        default:
            console.log(`'${year}' is Invalid Input`);
            break;
    }
    console.log(dayCount);
}
leapYear(2024);
leapYear(NaN);
leapYear(2015);
leapYear(null);