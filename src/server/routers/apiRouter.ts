import {Request, Response, Router} from 'express'
import Author, {AuthorInstance} from '../models/author'

const apiRouter = Router()

apiRouter.post('/authors', (request: Request, response: Response) => {
	const {name} = request.body
	Author.create({name}).then((author: AuthorInstance) => {
		response.status(201).json(author)
	}).catch(err => {
		console.error(err) // TODO REPLACE WITH LOGGER
		response.status(500).json(err)
	})
})

apiRouter.delete('/authors/:id', (request: Request, response: Response) => {
	const {id} = request.params
	Author.destroy({where: {id}}).then((count: number) => {
		response.status(204).send()
	}).catch(err => {
		console.error(err) // TODO REPLACE WITH LOGGER
		response.status(500).json(err)
	})
})

apiRouter.put('/authors/:id', (request: Request, response: Response) => {
	const {id} = request.params
	const {name} = request.body
	Author.update({name}, {where: {id}, returning: true}).then((result: [number, AuthorInstance[]]) => {
		const author: AuthorInstance = result[1][0]
		response.status(200).json(author)
	}).catch(err => {
		console.error(err) // TODO REPLACE WITH LOGGER
		response.status(500).json(err)
	})
})

export default apiRouter
