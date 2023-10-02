var leapYear = function(year) {
    if (year === null || isNaN(year) || year === undefined) {
        console.log("Invalid Input");
    } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is not a Leap Year");
    }
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

