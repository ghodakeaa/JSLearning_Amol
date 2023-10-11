console.log(`**************Function constructor for Bank details**************\n`);

function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName
    this.location = location
    this.ifscCode = ifscCode
    this.branchCode = branchCode
}

let yesBank = new Bank("Yes Bank", "Pune", "YESB0004351", "04351");
console.log(`Bank Details are--> \nBank Name:${yesBank.bankName}\nBank Location: ${yesBank.location}\nIFSC Code: ${yesBank.ifscCode}\nBranch Code: ${yesBank.branchCode}\n*************************************`);

let sbiBank = new Bank("SBI Bank", "Mumbai", "SBIN0000234", "00234");
console.log(`Bank Details are--> \nBank Name:${sbiBank.bankName}\nBank Location: ${sbiBank.location}\nIFSC Code: ${sbiBank.ifscCode}\nBranch Code: ${sbiBank.branchCode}\n*************************************`);

let mahBank = new Bank("Maharashtra Bank", "Satara", "MAHAB0032764", "32764");
console.log(`Bank Details are--> \nBank Name:${mahBank.bankName}\nBank Location: ${mahBank.location}\nIFSC Code: ${mahBank.ifscCode}\nBranch Code: ${mahBank.branchCode}\n*************************************`);

let axisBank = new Bank("Axis Bank", "Bangalore", "AXIS0005034", "05034");
console.log(`Bank Details are--> \nBank Name:${axisBank.bankName}\nBank Location: ${axisBank.location}\nIFSC Code: ${axisBank.ifscCode}\nBranch Code: ${axisBank.branchCode}\n*************************************`);

console.log(`*-----Working hours for SBI bank-----*`);
Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

console.log(`Open time for SBI is: ${sbiBank.openTime} \nClose time for SBI is: ${sbiBank.closeTime}\n*************************************`);

console.log(`*-----Working hours for Axis bank-----*`);

console.log(`Open time for SBI is: ${axisBank.openTime} \nClose time for SBI is: ${axisBank.closeTime}\n*************************************`);

console.log(`Bank Name-: ${yesBank.bankName}\nBranch Code-: ${yesBank.branchCode}\nOpen Time is-: ${yesBank.openTime}\n`);

console.log(`######################## The End ########################`);