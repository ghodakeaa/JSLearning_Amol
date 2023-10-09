let bankSBI = {
    branchName: "State Bank Of India",
    IFSCCode: "SBIN0000123",
    MICRCode: 560002224,
    branchCode: "017042",
    address: "Kothrud"
}

console.log(`SBI bank details:\n`,bankSBI, `\n*********************************************************`);

let bankLocation = {
    street: "10th Cross Road",
    city: "Pune",
    pin: 411038
}
console.log(`Bank location details:\n`,bankLocation, `\n*********************************************************`);

Object.assign(bankSBI, bankLocation)
console.log(`This is bankSBI and bankLocation cloned data:\n`, bankSBI, `\n*********************************************************`);

let rateOfInterest = {
    homeLoanInterest: "10%",
    personalLoanInterest: "14%",
    dueInterest: "18%"
}
console.table(rateOfInterest);
console.log(`\n*********************************************************`);

let sbiDetails = Object.assign({}, bankSBI, bankLocation, rateOfInterest);
console.table(sbiDetails)
console.log(`\n****************Traverse the SBI Details****************`);

for (const key in sbiDetails) {
    let result = sbiDetails[key];
    console.log(key,":", result);
}

