console.log(`************************Step 1 for male marriage eligibility************************\n`);
function maleMarriageEligibility(gender, age, boyName){
    var marriage= gender=="male" && age>=21 ? `Hey ${boyName} you are eligible for marriage. Congratulation..!`:`Sorry ${boyName} you are not eligible for marriage, please try next time. `;
    return marriage;
}
var marriage = maleMarriageEligibility("male", 25, "Bill Gates");
console.log(`${marriage}\n`);
var marriage = maleMarriageEligibility("male", 17, "Stew Jobs");
console.log(`${marriage}\n`);

console.log(`************************Step 2 for female marriage eligibility************************\n`);

function femaleMarriageEligibility(gender, age, girlName){
    var fMarriage= gender=="Female" && age>=18 ? `Hey ${girlName} you are eligible for marriage, congrats..!`:`Sorry ${girlName} you are not eligible for marriage, please try next time.`;
    return fMarriage;
}
fMarriage = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(`${fMarriage}\n`);
fMarriage = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(`${fMarriage}`);