console.log(`Count the Character 'A' and 'a' in given string.\n`);


let countCharA=function(str){
let count= 0;
let upperStr="A";

for (let index = 0; index <= str.length-1; index++) {
    let char= str.charAt(index).toUpperCase();
    if (upperStr.includes(char)) {
        count++;
    }
}
console.log(`The given string is "${str}".\nTotal number of 'A' & 'a' in given string= ${count}\n`);
}
countCharA("I AM Learning JavaScript, The Language of internet");
countCharA("My favorite movie is LAggAn");