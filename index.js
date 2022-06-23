const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.send('API .....!!!')
})

app.listen(8080, () => {
    console.log('app    up')
})