import controller from './controller'

const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static(path.resolve(__dirname, '../../public')));
app.get('/hello', controller)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
