let personalDetails = {
    firstName : "Amol",
    lastName : "Ghodake",
    age : 28,
    height : "170cm",
    weight : "74kg"
}
console.log(personalDetails);

let collegeDetails = {
    collegeName: "College of Computer Sciences, Wakad",
    qualification : "M.Sc- Computer Science",
    passingYear : 2018,
    result : "A Grade"
}
console.log(collegeDetails);

let myDetails = Object.assign({}, personalDetails, collegeDetails);
console.log(`\nMy details are as above-`);
console.log(myDetails.firstName, myDetails.lastName, myDetails.age, myDetails.height, myDetails.weight, myDetails.collegeName, myDetails.qualification, myDetails.passingYear, myDetails.result);

console.log(`Array for friends name\n`);

let friendsArray = ["Santosh", "Vikas","Shishir","Vinod","Sachin"];
Object.freeze(friendsArray);

for (const element of friendsArray) {
    console.log(element);
}

console.log(`\nReverse the string- "Codemind Technology" and the output should be- 'ygolonhceT'\n`);

let str = "Codemind Technology";

let reverseString="";
for (let index = str.length-1; index >= 0; index--) {
    let char = str.charAt(index);
    
    if (char==" ") {
        break;
    }
        reverseString = reverseString + char;
}

console.log(reverseString);

console.log(`\n************************************ The End ************************************  `);