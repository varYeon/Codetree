const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push({
    name,
    height: Number(height),
    weight: Number(weight),
  });
}

const result = records.sort((a, b) => {
  if (a.height === b.height) return b.weight - a.weight;
  return a.height - b.height;
}).map(record=>`${record.name} ${record.height} ${record.weight}`)

console.log(result.join('\n'))
