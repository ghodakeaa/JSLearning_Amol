console.log(`********To check 11 is prime number or not********\n`);

function isPrimeNumber(n){
    if (n<=1) {
        return false;
    }
    for (let index = 2; index < n; index++) {
        if (n%index===0) {
            return false;
        }
        return true;
    }
}
console.log(isPrimeNumber(7));