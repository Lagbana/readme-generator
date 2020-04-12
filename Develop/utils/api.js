const axios = require('axios')

const api = {
  getUser(username) {
    try{
      const queryUrl = `https://api.github.com/users/${username}`
      const config = {
        method: 'get',
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
  
      return result = axios.get(queryUrl, config)
    } catch(err){
      console.log(err)
    }
    
  }

}

module.exports = api
