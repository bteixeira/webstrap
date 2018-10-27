/* Imports */
import * as path from 'path'
import * as express from 'express'
import {Request, Response} from 'express'

import defaultController from './controllers/defaultController'
import {logger} from './glue'

/* Inits */
const app = express()
const port = 3000

/* Middleware */
app.use((request: Request, response: Response, next) => {
	logger.info(request.method, request.path)
	next()
})

/* Routing */
app.use('/', defaultController)
app.use('/', express.static(path.resolve(__dirname, '../../public')))

/* Start app */
app.listen(port, () => {
	logger.info(`Example app listening on port ${port}!`)
})
