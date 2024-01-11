const express = require('express')
const path = require('path');
const app = express()
const port = 6969
const filePath = path.resolve(__dirname, 'demo.html');

app.use('/public', express.static('public'))
app.use('/assets', express.static('assets'))
app.use('/library', express.static('library'))

app.get('/', (req, res) => {
  
  res.sendFile(filePath);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
