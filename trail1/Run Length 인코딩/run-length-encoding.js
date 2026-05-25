const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const result = [];
result.push(input[0]);
let count = 1;

// 예외 처리
if (input.length === 1) {
   const resultStr = input + "1";
   console.log(resultStr.length);
   console.log(resultStr);
   return;
}

for (let i = 1; i < input.length; i++) {

   if (input[i - 1] === input[i]) {
      count++;
   } else {
      result.push(count);
      count = 1;
      result.push(input[i]);
   }

   if (i === input.length - 1) {
      result.push(count);
   }
}

const resultStr = result.join('');
// 문자열로 변환 후 길이 세기 (예외 처리 : count가 두 자리 수인 경우 배열의 길이를 세면 x)

console.log(resultStr.length);
console.log(resultStr);
