
function squareOfWorldLength(arg){
    var str= arg.length;
    console.log(`Length of string ${arg} is: ${str}`);
    var result= str**2;
    console.log(`The square of string ${arg} length is: ${result}\n`);
}
squareOfWorldLength("JavaScript");
squareOfWorldLength("Google Chrome");
squareOfWorldLength("Developer Smart");
console.log(`\n*******************************\n`);

function string(){
    var str = "I am Angular Developer";
    var strLength= str.length;
    console.log(`The string length is: ${strLength}`);
    var words= str.split(" ");
    var wordCount= words.length;
    console.log(`The string word count is: ${wordCount}\n`);
    var result=strLength/wordCount;
    console.log(`The division of string length and string word count=${result}\n`);
    var multi= strLength*wordCount;
    console.log(`The multiplication of string length and string word count=${multi}`);
}
string();
