const axios = require("axios")
const fs = require("fs")

axios({
    method:"get",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg",
    responseType: "Stream",
    responseEncoding: 'binary',
}).then(function(response){
    response.data.pipe(fs.createWriteStream("imagem.jpg"))
})

