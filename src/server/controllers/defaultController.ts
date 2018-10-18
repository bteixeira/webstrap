import {Request, Response, Router} from 'express'
import Hello from '../../assets/ts/components/hello'
import * as glue from '../glue'

const defaultController = Router()

defaultController.get('/', (req: Request, res: Response) => {
	glue.render(res, Hello, {name: 'this is a React component rendered directly from ExpressJS in the server'})
})

export default defaultController
