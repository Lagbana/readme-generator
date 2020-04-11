const fs = require('fs').promises
const inquirer = require('inquirer')



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
const questionFunc = async () => {
    return response = await inquirer.prompt(questions)    
}


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
// questionFunc()
// const {username, title, contributors } = response
// api.getUser(username)
// const {github responses} = apiResponse
// generateMarkdown(data)
// writeToFile('test.md', readmeContent)
}

// init()







/*
response keys:
data
- avatar_url
- html_url
- name

*/