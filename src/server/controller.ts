import {Request, Response} from 'express'
import Hello from '../assets/ts/components/hello'
import * as glue from './glue'

export default function (req: Request, res: Response) {
	glue.render(res, Hello, {name: 'this is a React component rendered directly from ExpressJS in the server'})
}
