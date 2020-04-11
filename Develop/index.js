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
        name: 'contributors',
        message: 'Who are the contributors?'
    }

]

// Questionaire function using inquirer
const questionFunc = async () => {
    return response = await inquirer.prompt(questions)    
}

// Execute Github Call
const githubResult = async (name) => {
    return result = await api.getUser(name) 
}



// Write file
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

const init = async () => {
await questionFunc()
const {username, title, contributors } = response

await githubResult(username)
const {name, avatar_url, html_url } = result.data

// generateMarkdown(data)
// writeToFile('test.md', readmeContent)
}

init()

