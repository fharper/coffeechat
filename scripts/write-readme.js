"use strict;";
const fs = require("fs");
const appRoot = require("app-root-path");
let path = require("path");

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
const peopleList = json.people
    .map(
        (person) => {
            let socials = [];
            ['linkedin', 'twitter', 'mastodon'].forEach(social => {
                if (person.hasOwnProperty(social) && person[social].length > 0) {
                    const socialName = social === 'linkedin' ? 'LinkedIn' : social.charAt(0).toUpperCase() + social.slice(1);
                    socials.push(`[${socialName}](${person[social]})`);
                }
            });

            return `- **[${person.name}](${person.scheduling}) (${socials.join(', ')}), ${
                person.title
            } at ${person.company}:** ${person.topics.join(", ")}`
        }
    )
    .join("\r\n");

//Write README.md
const template = fs.readFileSync(`${appRoot}/README-TEMPLATE.md`, "utf8");
fs.writeFileSync(
    `${parentFolderPath}/README.md`,
    template.replace("PLACEHOLDER", peopleList)
);
