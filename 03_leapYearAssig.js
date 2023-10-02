console.log(`***************** Leap Year*****************\n`);

let leapYear = function (arg) {
  let result = +arg;
  if (arg % 4 == 0) {
    console.log(`The provided "${arg}" year is leap Year`);
  } else {
    if (arg <= 0 || isNaN(result)) {
      console.log(`The provided year "${arg}" is invalid`);
    } else {
      console.log(`The provided "${arg}" year is not a leap Year`);
    }
  }
};
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear("");
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1745);
leapYear(-1745);
