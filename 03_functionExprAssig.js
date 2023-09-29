console.log(`****************The square root of the number****************\n`);
 var square = function(arg){
    var result= arg*arg;
    console.log(`The square of the ${arg} is= ${result}\n`);
 }
 square(5);
 square(6);
 square(25);
 square(100);
 square(67.89);
 square(59);
 console.log(`*************************Type of the function**************************\n`);
 console.log(`The type of the function is:${typeof square}\n`);
 console.log(`*************************Area of the rectangle*************************\n`);

 var area = function(val1, val2){
    var areaOfRectangle= val1*val2;
    console.log(`The are of the rectangle for length is ${val1} and width is ${val2}= ${areaOfRectangle}\n`);
 }
 area(499, 917);

 console.log(`******************************Swap values*****************************\n`);

 var swapValues = function(arg1, arg2){
    console.log(`Values are before the swap :${arg1} and ${arg2}\n`);
    var temp = arg2;
    arg2= arg1;
    arg1= temp;
    console.log(`Values are after the swap :${arg1} and ${arg2}\n`);
 }
 swapValues("Mahi", "Raina");
 swapValues(55, 77);

 console.log(`********************Function Expression for string********************\n`);

 var str = function(){
    var string="JS the most popular language of internet";
    console.log(`The given string is --> "${string}"\n`);
    console.log(`The total characters are available in given string= ${string.length}\n`);
    console.log(`The character at index 6 is- ${string.charAt(6)}\n`);
    console.log(`The character at index 11 is- ${string.charAt(11)}\n`);
    console.log(`The last character of the string is-${string.charAt(string.length-1)}\n`);
    console.log(`The first character of the string is-${string.charAt(0)}\n`);
    console.log(`The third last character of the string is-${string.charAt(string.length-3)}\n`);
    var store= string.split(" ")
    console.log(`The total number of words in giver string are-: ${store.length} and the square root of this number is-: ${store.length * store.length}\n`);
    console.log(`************************THE END************************\n`);
 }
 str();