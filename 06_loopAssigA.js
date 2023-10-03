
let str= "I am very good IT Developer";
let count= 0;
let upperStr="AEIOU";
let lowerStr="aeiou";

for (let index = 0; index <= str.length-1; index++) {
    let char= str.charAt(index).toLocaleUpperCase();
    if (upperStr.includes(char)) {
        count++;
    }
}
console.log(`Total vowels are in given string= ${count}\n`);


let num = 0;
for (let index = 1; index <= 5; index++) {
    num = num + index*index*index;  
}
console.log(`Sum of cube from 1 to 5= ${num}\n`);


function oddPositionedChars(str){
    for (let index = 0; index <str.length-1; index++) {
        if (index%2!=0 && str.charAt(index)!=" ") {
            console.log(str.charAt(index));

        }
    }
}
console.log(`Odd position characters from given sting`);
oddPositionedChars("Hard work always pay back");
console.log(`**************************`);
oddPositionedChars("Soon I will be UI IT Champ");