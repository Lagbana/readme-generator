function license (type) {


    const links = {
        "MIT": `https://choosealicense.com/licenses/mit/`,
        "Academic_Free": `https://choosealicense.com/licenses/afl-3.0/`,
        "Apache": `https://choosealicense.com/licenses/apache-2.0/`,
        "The_Unlicense": `https://choosealicense.com/licenses/unlicense/`,
        "MS_PL": `https://choosealicense.com/licenses/ms-pl/`,
        "GNU_3": `https://choosealicense.com/licenses/gpl-3.0/`

    }

    const arrKeys = (Object.keys(links))
    for (key of arrKeys) {
        if (key === type) {
            return links.key
        }
    }

  }
  
  module.exports = license
  