// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   <h1 align="center">${data.title} </h1>
  
  ![badge](https://img.shields.io/badge/license-${data.license}-green)<br />

  ## Description
   ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-green)
  <br />
  This application is covered by the ${data.license} license. 
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}<br />
  <br />
  You can find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me: ${data.email}
      `;
}

module.exports = generateMarkdown;
