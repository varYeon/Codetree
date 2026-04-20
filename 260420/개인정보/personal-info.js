const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}
/**
 [
  { name: 'lee', height: 167, weight: 40.1 },
  { name: 'kim', height: 149, weight: 32.9 },
  { name: 'park', height: 161, weight: 53.1 },
  { name: 'choi', height: 183, weight: 70.3 },
  { name: 'jung', height: 155, weight: 45.7 }
]
 */

const nameArray = students.sort((a, b) => a.name.localeCompare(b.name)).map(student =>
  `${student.name} ${student.height} ${student.weight.toFixed(1)}`
);
const heightArray = students.sort((a, b) => b.height - a.height).map(student =>
  `${student.name} ${student.height} ${student.weight.toFixed(1)}`
);;

console.log('name');
console.log(nameArray.join('\n'));
console.log('\nheight');
console.log(heightArray.join('\n'));
