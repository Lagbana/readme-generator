const license = (type) => {

    const links = {
        "MIT": [`https://choosealicense.com/licenses/mit/`, `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`],
        "Apache": [`https://choosealicense.com/licenses/apache-2.0/`, `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`],
        "The_Unlicense": [`https://choosealicense.com/licenses/unlicense/`, `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`],
        "Mozilla_PL_2": [`https://choosealicense.com/licenses/mpl-2.0/`, `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`],
        "GNU_3": [`https://choosealicense.com/licenses/gpl-3.0/`, `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`]

    }

    const arrKeys = (Object.keys(links))
    for (key of arrKeys) {
        if (key === type) {
            return links[key]
        }
    }

  }
  
  module.exports = license
  