import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import defaultLayout from './layouts/default'
import {Response} from 'express'

export function render<T> (res: Response, reactClass: React.ComponentClass<T>, props: T) {
	const element = React.createElement(reactClass, props)
	const elementMarkup = ReactDOMServer.renderToString(element)
	const documentMarkup = defaultLayout(elementMarkup)
	res.send(documentMarkup)
}
