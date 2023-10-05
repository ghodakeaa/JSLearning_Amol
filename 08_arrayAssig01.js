console.log(`*************Array Assignment*************\n`);

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`Even positioned values from given array`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        let result= arrayNumbers[index];
        console.log(result);
    }
}


console.log(`*************Sum of the array elements*************\n`);

let arrayNum = [22, 11, 44, 55, 77, 33];
let sum=0;
for (let index = 0; index < arrayNum.length; index++) {
    const element= arrayNum[index];
    sum = sum + element; 
}
console.log(`The sum of the given array element is= ${sum}`);