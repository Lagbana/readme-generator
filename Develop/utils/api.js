const axios = require('axios')

const api = {
  getUser(username) {

    const queryUrl = `https://api.github.com/users/${username}`
    const config = {
      method: 'get',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }

    return result = axios.get(queryUrl, config)
    

  }


}



module.exports = api
