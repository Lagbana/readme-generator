const license = require('./license.js')
const repo = require('./repo.js')

function generateMarkdown(data, gitData) {

  // repo(gitData.repos_url, data.reponame)

  // Link to license based on user input
  const licenseLink = license(data.license)

  // Badges
  let openIssues = `![GitHub issues](https://img.shields.io/github/issues-raw/${data.username}/${data.reponame})`
  let contributors = `https://img.shields.io/github/contributors/${data.username}/${data.reponame}`
  let lastCommit = `https://img.shields.io/github/last-commit/${data.username}/${data.reponame}`
  let codeSize = `https://img.shields.io/github/languages/code-size/${data.username}/${data.reponame}`

  // Make the avatar image smaller
  let avatar = gitData.avatar_url + '&s=125'

  // Installation steps bullet points creation
  const install = data.installation
  let arr = install.split(', ')

  let insert = 
  `  
`
  const inserter = () => {
    for (element of arr) {
      insert += ' - ' + element + ' \n'
    }
  }
  inserter()


  const markdown = `
# ${data.title}
${openIssues} ${contributors} ${codeSize} ${lastCommit} ${licenseLink[1]}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


## Installation
${insert}

## Usage
${data.usage} 

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
${avatar}
Contact: ${gitData.name}
Email: ${data.questions}

## License
Licensed under the [${data.license}](${licenseLink[0]}) license.
`
return markdown
}

module.exports = generateMarkdown
