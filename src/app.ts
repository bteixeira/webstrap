import {Request, Response} from 'express'

const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.get('/hello', (req: Request, res: Response) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
