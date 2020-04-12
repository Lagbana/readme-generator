// Dependencies
const axios = require('axios')

// API Module Object
const api = {
  getUser(username) {
    try{
      const queryUrl = `https://api.github.com/users/${username}`
      const config = {
        method: 'get',
        headers: {
          // Strict Accept format. 
          // Enforced version 3 to prevent failure when gitHub switches to new API version
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
