import fs from 'fs'
import { FLOWER_COLORS, FLOWER_SIZES } from '../constants.js';

const randomItemFromList = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}
const randomBoolean = () => Math.random() < 0.5;

const generateRandomFlower = () => {
  return {
    size: randomItemFromList(FLOWER_SIZES),
    color: randomItemFromList(FLOWER_COLORS),
    has_thorns: randomBoolean(),
  };
};

const generateCSVRow = (n, data) => {
  return `${n},${data.has_thorns},${data.color},${data.size}\n`;
};

const generateCSVFile = (filename, numRows) => {
  const header = 'flower_id,has_thorns,color,size\n';
  let csvContent = header;
  let n = startID
  for (let i = 0; i < numRows; i++) {
    const rowData = generateRandomFlower();
    const row = generateCSVRow(n, rowData);
    csvContent += row;
	  n++
  }

  fs.writeFileSync(filename, csvContent, 'utf-8');
  console.log(`CSV file "${filename}" created successfully with ${numRows} rows.`);
};

// Usage
const filename = 'flowers.csv';
const numRows = 1000
// Command-line arguments
const args = process.argv.slice(2);
const startID = parseInt(args[0], 10); 

generateCSVFile(filename, numRows);
