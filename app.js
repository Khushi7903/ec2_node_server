const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My node js server run on ec2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})