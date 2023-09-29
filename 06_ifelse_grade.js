console.log(`************Function Expression for Vote Eligibility************\n`);

var voteEligible = function(age){
    var result = +age;
    if (age<=0 || age>130 || isNaN(result)){
        console.log(`The provided age "${age}" is invalid.\n`);
    } else{
      if (age<18){
        console.log(`Your age is "${age}" years & it is below 18 years, sorry you are not eligible for vote.\n`);
      } else{
        console.log(`Congrats..!, Your age is "${age}" years & you are eligible for vote.\n`);
      }
    }
}  
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);