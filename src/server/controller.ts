import {Request, Response} from 'express'

export default function (req: Request, res: Response) {
	// res.send('Hello World!')
	res.render('hello', {name: 'this is a React component rendered directly from ExpressJS in the server'})
}
