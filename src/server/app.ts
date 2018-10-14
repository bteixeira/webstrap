import controller from './controller'

const path = require('path')
const express = require('express')
const app = express()
const port = 3000


/* App configuration */
app.set('views', path.resolve(__dirname, '../assets/ts/components'))
app.set('view engine', 'tsx')
app.engine('tsx', require('express-react-views').createEngine())

/* Routing */
app.use('/', express.static(path.resolve(__dirname, '../../public')))
app.get('/hello', controller)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
