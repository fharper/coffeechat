'use strict;'
const fs = require('fs');
const appRoot = require('app-root-path');
let path = require('path');

//Get the data
path = path.parse(appRoot.path);
parentFolderPath = path.dir.split(path.sep).pop();
const data = fs.readFileSync(`${parentFolderPath}/people.json`);
const json = JSON.parse(data);

//Order by name
json.people.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});

//Generate with proper formating
const peopleList = json.people.map(people =>
	`- **[${people.name}](${people.scheduling}) (${(people.linkedin ? "[LinkedIn](" + people.linkedin + "), " : "")}${(people.twitter ? "[Twitter](" + people.twitter + ")" : "")}), ${people.title} at ${people.company}:** ${people.topics.join(', ')}`
).join('\r\n');

//Write README.md
const template = fs.readFileSync(`${appRoot}/README-TEMPLATE.md`, 'utf8');
fs.writeFileSync(`${parentFolderPath}/README.md`, template.replace('PLACEHOLDER', peopleList));
