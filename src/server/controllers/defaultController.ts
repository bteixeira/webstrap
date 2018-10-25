import {Request, Response, Router} from 'express'
import Home from '../../assets/ts/components/home'
import * as glue from '../glue'

const defaultController = Router()

/**
 * "Normal" route, returns fully rendered HTML page
 */
defaultController.get('/', (request: Request, response: Response) => {
	glue.render(response, 'home', Home, {
		name: 'this is a React component rendered directly from ExpressJS in the server',
	})
})

/**
 * REST API routes
 */
defaultController.post('/new', (request: Request, response: Response) => {
	response.json('[DUMMY] Resource successfully created!')
})

defaultController.get('/get', (request: Request, response: Response) => {
	response.json(`[DUMMY] Here is the resource with id ${request.params.id || request.query.id}!`)
})

export default defaultController
