// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

switch(license) {
  case 'Apache License 2.0':
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  break;

  case 'MIT License':
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  break;

  case 'Boost Software License 1.0':
  return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  break;

  case 'GNU Public License v3.0':
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  break;
  
  default:
  return '';

}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License 2.0':
    return '(https://www.apache.org/licenses/LICENSE-2.0)';
    break;
  
    case 'MIT License':
    return '(https://opensource.org/licenses/MIT)';
    break;
  
    case 'Boost Software License 1.0':
    return '(https://www.boost.org/LICENSE_1_0.txt)';
    break;
  
    case 'GNU Public License v3.0':
    return '(https://www.gnu.org/licenses/gpl-3.0.en.html)';
    break;
    
    default:
    return '';
  
  }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // change this to make simpler

  if (license === 'None') {
    return ''
  }
  else {
    return `${license}`
  };
  
  // if (license === 'Apache License 2.0') {
  //   return 'Apache License 2.0'
  // } else if (license === 'MIT License') {
  //   return 'MIT License'
  // } else if (license === 'Boost Software License 1.0') {
  //   return 'Boost Software License 1.0'
  // } else if (license === 'GNU Public License v3.0') {
  //   return 'GNU Public License v3.0'
  // }else {
  //   return ''
  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## ${renderLicenseBadge(data.license)}

## Table of Contents:
◆ [Description](#description)\n
◆ [Installation](#installation)\n
◆ [Usage](#usage)\n
◆ [License](#license)\n
◆ [Credits](#credits)\n
◆ [Tests](#tests)\n
◆ [Contact Information](#contact-information)

## Description:

${data.description}

## Installation:

${data.installation}

## Usage:

${data.usage}

## License:

${renderLicenseSection(data.license)}\n
${renderLicenseLink(data.license)}


## Credits:

${data.credits}

## Tests:

${data.tests}

## Contact Information:

Find me on GitHub at [${data.username}](https://github.com/${data.username})!\n
Email me at [${data.email}](mailTo:${data.email}).
 `;
}
// add links for contact

module.exports = generateMarkdown;