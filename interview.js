// console.log(`Total count "o" in given string`);

// const str = "i am good ui developer"
// let count="";

// for (let index = 0; index <= str.length; index++) {
//     let result = index.characterAt(index)
//     if (index==result) {
//         count++;
//     }
//     console.log(`Total character of "o" in given string =${count}`);
// }

// const array = [20, 15, 56, 89, 35]
// let count="";
// for (let index = 0; index < array.length; index++) {
//     if (array%2==0) {
//          count = count+ index;
//     }  
// }
// console.log(`The even number values are=${count}`);

const array = [20, 15, 56, 89, 35]
let count=0;
for (let index = 0; index < array.length; index++) {
    if (array[index]%2==0) {
         count = count+ 1;
    }
    
}
console.log(`The even number values are=${count}`);