import {Request, Response, Router} from 'express'
import Home from '../../assets/ts/components/home'
import * as glue from '../glue'
import Author, {AuthorInstance} from '../models/author'
import apiRouter from './apiRouter'

const defaultRouter = Router()

defaultRouter.get('/', (request: Request, response: Response) => {
	response.locals.logger.info('Hello from the controller')
	Author.findAll().then((authors: AuthorInstance[]) => {
		glue.render(response, 'home', Home, {
			authors: authors,
		})
	})
})

defaultRouter.use('/api/', apiRouter)

// defaultRouter.get('/get', (request: Request, response: Response) => {
// 	const id = parseFloat(request.params.id || request.query.id)
// 	Author.findById(id).then((author: AuthorInstance) => {
// 		response.json(author)
// 	}).catch(err => {
// 		console.error(err)
// 		response.status(400).json(err)
// 	})
// })

export default defaultRouter
