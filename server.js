const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log('TEST')
})

app.listen(3000)
