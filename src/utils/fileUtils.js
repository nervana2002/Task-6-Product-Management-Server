const fs = require('fs');
const path = require('path');


const writeJSONFile = (relativePath, data) => {
const p = path.resolve(process.cwd(), relativePath);
fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf-8');
};


const readJSONFile = (relativePath) => {
const p = path.resolve(process.cwd(), relativePath);
if (!fs.existsSync(p)) return null;
const raw = fs.readFileSync(p, 'utf-8');
return JSON.parse(raw);
};


module.exports = { writeJSONFile, readJSONFile };