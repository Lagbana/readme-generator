const inquirer = require('inquirer')
const fs = require('fs').promises
const axios = require('axios')


const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your gitHUb username?'
    }

]

const readmeContent = `





`
function writeToFile(fileName, data) { 
    // fs.writeFile('repos.txt', repoNamesStr, function (err) {
    //     if (err) {
    //         throw err
    //     }

    //     console.log(`Saved ${repoNames.length} repos`)
    //     console.log('Saved ' + repoNames.length + ' repos')
    // })
}

const init = async () => {

    const response = await inquirer.prompt(questions)
    const {username } = response
    const queryUrl = `https://api.github.com/users/${username}`
    const config =  {
        method: 'get',
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
    }

    const result = await axios.get(queryUrl, config)
    console.log(result.data.avatar_url)
    console.log(result.data.repos)
    console.log(result.data.html_url)
    console.log(result.data.name)

}

init()

/*
response keys:
data
- avatar_url
- html_url
- name

*/

const deleteobjt = {

    data: {

      avatar_url: 'https://avatars0.githubusercontent.com/u/25419874?v=4',

      url: 'https://api.github.com/users/Lagbana',
     
      name: 'Larry Agbana',

      html_url: 'https://github.com/Lagbana',

    }
  }