const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(' ').map(Number);
  studentInputs.push({
    height,
    weight,
    id: i,
  });
} // [ { height: 1, weight: 5, id: 1 }, { height: 3, weight: 6, id: 2 } ]

const students = studentInputs.sort((a, b) => {
  if (a.height !== b.height) return a.height - b.height;
  if (a.weight !== b.weight) return b.weight - a.weight;
}).map(student => `${student.height} ${student.weight} ${student.id}`)

console.log(students.join('\n'));
