const axios = require('axios')

axios.get('https://www.google.com')
    .then(function(response) {
        console.log(response.data)
        console.log(response.status)
        console.log(response.statusText)
    })