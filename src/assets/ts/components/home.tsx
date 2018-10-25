import * as React from 'react'

import Hello, {HelloProps} from './hello'

interface HomeState {id: string}

function handleResponse (response: Response) {
	response.text().then(console.log)
}

export default class Home extends React.Component<HelloProps, HomeState> {
	constructor (props: HelloProps) {
		super(props)
		this.state = {
			id: '',
		}
	}
	render () {
		return (
			<React.Fragment>
				<Hello name={this.props.name}/>
				<div>
					Add new resource:
					<button onClick={this.handleClickNew.bind(this)}>Go</button>
				</div>
				<div>
					Get resource with this id:
					<input
						name="id"
						value={this.state.id}
						onChange={event => this.setState({id: event.target.value})}
					/>
					<button onClick={this.handleClickGet.bind(this)}>Go</button>
				</div>
			</React.Fragment>
		)
	}

	handleClickNew (event: Event) {
		window.fetch('new', {
			method: 'POST',
		}).then(handleResponse)
	}

	handleClickGet (event: Event) {
		window.fetch(`get?id=${this.state.id}`, {
			method: 'GET',
		}).then(handleResponse)
	}
}
