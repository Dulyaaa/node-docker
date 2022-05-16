const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello SLIIT updated from CICD!')
})

app.listen(port, () => {
    console.log(`app running on ${port}`)
})