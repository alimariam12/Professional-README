// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${answers.title}

   <h1 align="center">${answers.projectTitle} </h1>
  
  ![badge](https://img.shields.io/badge/license-${answers.license}-green)<br />

  ## Description
   ${answers.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-green)
  <br />
  This application is covered by the ${answers.license} license. 
  ## Contributions
  ${answers.contributions}
  ## Tests
  ${answers.tests}
  ## Questions
  ${answers.questions}<br />
  <br />
  You can find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />
  ✉️ Email me: ${answers.email}
      `;
}

module.exports = generateMarkdown;
