let num = prompt("Please enter a number:");
console.log(` data type  : ${typeof num}`);

num = Number(num);

while (num < 10) {
    num = prompt("Please enter a new number (must be 10 or greater):");
    num = Number(num);
}

console.log(`Thank you! You entered: ${num}`);