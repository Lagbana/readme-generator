const fs = require('fs').promises
const inquirer = require('inquirer')
const api = require('./utils/api.js')



const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your gitHUb username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors?'
    }

]

// Questionaire function using inquirer
const questionFunc = async () => {
    return response = await inquirer.prompt(questions)    
}

// Execute Github API get call
const githubResult = async (name) => {
    return result = await api.getUser(name) 
}



// Write markdown file
const writeToFile = async (fileName, data) => {

    let filehandle
    try {
        filehandle = await fs.open(fileName, 'w')
        await filehandle.writeFile(data)
        console.log('Successfully wrote to test.md')
    } catch (err) {
        console.error('Problem writing test.md', err)
    } finally {
        if (filehandle !== undefined) await filehandle.close()
    }
}
const repos = (url) => {

    const config = {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    }

   const result = axios.get(url, config)
   console.log(result)
}

const init = async () => {
await questionFunc()
const {username, title, contributors } = response

await githubResult(username)
const {name, avatar_url, html_url, repos_url } = result.data

await repos(repos_url)

// generateMarkdown(data)
// writeToFile('test.md', readmeContent)
}

init()

