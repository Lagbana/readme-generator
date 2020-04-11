const axios = require('axios')

const repo = async (url, input_Repo_Name) => {

    const config = {
        method: 'get',
        headers: {
            Accept: 'application/json'
        }
    }

    const result = await axios.get(url, config)
    const arr = result.data
    for (repository of arr){
        if (repository.name === input_Repo_Name) {
            console.log(`
            stargazers: ${repository.stargazers_count}
            watchers: ${repository.watchers}
            open issues: ${repository.open_issues}
            forks: ${repository.forks}
            `)
        }
    }
}

module.exports = repo
