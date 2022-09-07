// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]

//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]

//   [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]

//   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]

// }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Credits](#credits)
  -[Tests](#tests)
  -Contact Information(#contact-information)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}

## Credits
${data.credits}

## Tests:
${data.tests}

## Contact Information:
Find me on GitHub at ${data.username}!
Email me at ${data.email}
 `;
}


module.exports = generateMarkdown;