function isEvenAndFive(n) {
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  const sum = tens + ones;

  if (n % 2 === 0 && sum % 5 === 0) return 'Yes';
  else return 'No';
}

const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

console.log(isEvenAndFive(n));
