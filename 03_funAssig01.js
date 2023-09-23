console.log("******************Step 1******************");
console.log("******************Functions with no arguments and no return type******************");

function show1(){
    console.log("Ganpati Bappa Morya...!");
}

show1();

function add(){
    var add=5+5;
console.log("Addition of 5+5=",add,"\n");
}

add();


console.log("******************Step 2******************");

function personalDetails(firstName, lastName, collegeName){
console.log("\n","First Name:",firstName, "\n","Last Name:",lastName,"\n","College Name:",collegeName,"\n");
}

personalDetails("Amol", "Ghodake", "CCS, Wakad");

console.log("******************Step 3******************");

function swapValues(val1, val2){
    console.log("Before the swap-\n",val1,",", val2);
    let temp=val1;
        val1=val2;
        val2=temp;
    console.log("After the swap-\n", val1,",", val2);
}
console.log("Swap the values Virat and Anuska", "\n");
swapValues("Virat", "Anushka");
console.log("\n");
console.log("Swap the values 1000 and 2000", "\n");
swapValues("1000", "2000");

console.log("******************Step 4******************\n");

function addThreeValues(arg1, arg2, arg3){
   let addition=arg1+arg2+arg3;
    console.log("Addition of three arguments=",addition, "\n");
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello"," Good"," Morning");