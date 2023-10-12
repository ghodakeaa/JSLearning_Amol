console.log(`************Object cloning and traversing\n`);

let bankSBI = {
    branchName : "Kothrud",
    ifscCode : "SBIN0000462",
    branchCode : 23462,
    totalAccountHolders : 2000
}

let bankLocation = {
    street : "10th Cross Road",
    city : "Pune",
    pin_code : 41020
}
console.log(`Clone the 'bankSBI' using Object assign method`);
let bankDetails1 = Object.assign({}, bankSBI);
console.log(bankDetails1, `\n`);

console.log(`Clone the 'bankLocation' using Object assign method`);
let bankDetails4 = Object.assign({}, bankLocation);
console.log(bankDetails4, `\n`);

console.log(`Clone the 'bankSBI' and 'bankLocation' using Spread Operator`);
let bankDetails2 = {...bankSBI}
console.log(bankDetails2, `\n`);

let bankDetails3 = {...bankLocation}
console.log(bankDetails3, `\n`);

let rateOfInterest ={
    homeLoanInterest : "10%",
    personalLoanInterest : "14%",
    dueInterest : "18%"
}

console.log(`Merge the 'bankSBI', 'bankLocation', & 'rateOfInterest'.`);
let sbiDetails = Object.assign({}, bankSBI, bankLocation, rateOfInterest);
console.log(sbiDetails.branchName, sbiDetails.ifscCode, sbiDetails.branchCode, sbiDetails.totalAccountHolders, sbiDetails.street, sbiDetails.city, sbiDetails.pin_code, sbiDetails.homeLoanInterest, sbiDetails.personalLoanInterest, sbiDetails.dueInterest);

// console.log(`Traverse the merged object\n`);

// for (const element of sbiDetails) {
//     console.log(element);
// }