import {Request, Response, Router} from 'express'
import Home from '../../assets/ts/components/home'
import * as glue from '../glue'
import Author, {AuthorInstance} from '../models/author'

const defaultController = Router()

/**
 * "Normal" route, returns fully rendered HTML page
 */
defaultController.get('/', (request: Request, response: Response) => {
	response.locals.logger.info('Hello from the controller')
	Author.findAll().then((authors: AuthorInstance[]) => {
		glue.render(response, 'home', Home, {
			authors: authors,
		})
	})
})

/**
 * REST API routes
 */
defaultController.post('/new', (request: Request, response: Response) => {
	const {name} = request.body
	Author.create({name}).then((author: AuthorInstance) => {
		response.status(201).json(author)
	}).catch(err => {
		console.error(err) // TODO REPLACE WITH LOGGER
		response.status(500).json(err)
	})
})

defaultController.get('/get', (request: Request, response: Response) => {
	const id = parseFloat(request.params.id || request.query.id)
	Author.findById(id).then((author: AuthorInstance) => {
		response.json(author)
	}).catch(err => {
		console.error(err)
		response.status(400).json(err)
	})
})

export default defaultController
