/* Imports */
import * as path from 'path'
import * as express from 'express'

import defaultController from './controllers/defaultController'

/* Inits */
const app = express()
const port = 3000

/* Routing */
app.use('/', defaultController)
app.use('/', express.static(path.resolve(__dirname, '../../public')))

/* Start app */
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
