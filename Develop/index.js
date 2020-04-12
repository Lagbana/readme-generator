// Dependencies
const fs = require('fs').promises
const inquirer = require('inquirer')
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')


// Inquirer questions
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your gitHub username?'
    },
    {
        type: 'input',
        name: 'reponame',
        message: 'What is your project reposiotry name (please be exact)?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        default: 'Project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of the application.',
        default: 'Project description...'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation steps. End each step with comma and space (, ). Example: "Step 1% Step 2% Step 3%" (do not use commas elsewhere)',
        default: 'Installation process...'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. ',
        default: 'Examples coming soon...'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contributing guidlines?',
        default: 'Contributor guidelines and covenant...'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your application tests and examples',
        default: 'Application tests and examples...'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide an email if you want users to send questions about the app',
        default: 'Hidden'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project: ',
        choices: ["MIT", "Apache", "The_Unlicense", "Mozilla_PL_2", "GNU_3"]
    }
]

// Questionaire function using inquirer
const questionFunc = async () => {
    try {
        return response = await inquirer.prompt(questions)
    } catch (err) {
        console.log(err)
    }

}

// Execute Github API get call
const githubResult = async (name) => {
    try {
        return result = await api.getUser(name)
    } catch (err) {
        console.log(err)
    }
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

// Execute ReadMe Creation
const init = async () => {
    try {
        await questionFunc()
        const { username } = response

        await githubResult(username)

        const markdown = generateMarkdown(await response, await result.data)

        writeToFile('autogen_README.md', markdown)
    } catch (err) {
        console.log(err)
    }
}

init()
