const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = []; // [ [ 1, 5, 1 ], [ 3, 6, 2 ] ]
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(" ").map(Number);
  students.push([height, weight, i]);
}

class Student {
  constructor(height, weight, number) {
    this.height = height;
    this.weight = weight;
    this.number = number;
  }
}

const studentsInfo = students.map(student => {
  const [height, weight, number] = student;
  return new Student(height, weight, number);
}).sort((a, b) => {
  if (a.height !== b.height) return b.height - a.height;
  if (a.weight !== b.weight) return b.weight - a.weight;
  if (a.number !== b.number) return a.number - b.number;
})
/**
[
  Student { height: 3, weight: 6, number: 2 },
  Student { height: 1, weight: 5, number: 1 }
]
 */

const result = studentsInfo.map(student => `${student.height} ${student.weight} ${student.number}`); //[ '3 6 2', '1 5 1' ]
console.log(result.join('\n'));
