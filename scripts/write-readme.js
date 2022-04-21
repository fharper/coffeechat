'use strict;'
const fs = require('fs');

//Get the data
const data = fs.readFileSync('../people.json');
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
const template = fs.readFileSync('README-TEMPLATE.md', 'utf8');
fs.writeFileSync('../README.md', template.replace('PLACEHOLDER', peopleList));
