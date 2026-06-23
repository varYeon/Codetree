const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

const result = [];

for (let i = 0; i < input.length; i++) {
    // const num = Number(input[i]);

    result.push(String.fromCharCode(input[i]));
    // String.fromCharCode() : 문자열 형태의 숫자도 내부적으로 자동으로 숫자로 형 변환(Type Coercion)
}

console.log(result.join(' '));
