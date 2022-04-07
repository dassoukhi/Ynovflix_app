const axios = require("axios")
axios.post("http://localhost:8080/medias", 2, {
    headers: {
        'Content-Type': 'application/json',
    }
}).then(response=>{
    console.log(response.data)
})