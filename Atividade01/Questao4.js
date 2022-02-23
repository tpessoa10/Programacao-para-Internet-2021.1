const axios = require('axios');
const readlineSync = require('readline-sync')
const link = readlineSync.question('Digite o link: ')

axios.get(link)
    .then(function(response) {
        let html = response.data
        
            let expressao = /<a href="(http?[^"]*)/g
            let resultado = [...html.matchAll(expressao)]
            resultado.map((value) =>{
                console.log(value[0])
    })
    })


