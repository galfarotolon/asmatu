const fs = require('fs');

// Read the JSON file
const rawData = fs.readFileSync('projects.json', 'utf8');
const data = JSON.parse(rawData);

// Check if the data is an array or an object with a "projects" key
const projects = Array.isArray(data) ? data : data.projects;

if (!projects) {
    console.error('No projects found in the JSON file.');
    process.exit(1);
}

// Convert each project object to a JSON string and join them with newline characters
const ndjson = projects.map(doc => JSON.stringify(doc)).join('\n');

// Write out the NDJSON file
fs.writeFileSync('projects.ndjson', ndjson);
console.log('Converted projects.json to projects.ndjson');