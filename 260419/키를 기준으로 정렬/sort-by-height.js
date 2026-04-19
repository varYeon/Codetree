const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
  studentsInput.push(input[i].split(' '));
}

class Body {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

// 객체 인스턴스 배열
const students = studentsInput.map(([name, height, weight]) => {
  return new Body(name, height, weight);
}).sort((a, b) => a.height.localeCompare(b.height))
/*
 [
  Body { name: 'kim', height: '149', weight: '32' },
  Body { name: 'jung', height: '155', weight: '45' },
  Body { name: 'park', height: '161', weight: '53' },
  Body { name: 'lee', height: '167', weight: '40' },
  Body { name: 'choi', height: '183', weight: '70' }
]
 */

// 문자열 배열 변형
const lines = students.map(student => {
  return `${student.name} ${student.height} ${student.weight}`;
});
/*
[
  'kim 149 32',
  'jung 155 45',
  'park 161 53',
  'lee 167 40',
  'choi 183 70'
]
*/

console.log(lines.join('\n'));
