console.log(`****************Month of Year using switch case:****************\n`);
function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`January `);
      break;
    case 2:
      console.log(`February`);
    case 3:
      console.log(`March `);
      break;
    case 4:
      console.log(`April`);
    case 5:
      console.log(`May `);
      break;
    case 6:
      console.log(`June`);
    case 7:
      console.log(`July `);
      break;
    case 8:
      console.log(`August`);
    case 9:
      console.log(`September`);
    case 10:
      console.log(`October`);
      break;
    case 11:
      console.log(`November`);
    case 12:
      console.log(`December`);
    default:
      console.log(`Invalid month data: ${month}`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
