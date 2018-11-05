import * as React from 'react'
import {AuthorInstance} from '../../../server/models/author'

interface HomeProps {authors: AuthorInstance[];}
interface HomeState {authors: AuthorInstance[];} // TODO THEY'RE BOTH THE SAME

export default class Home extends React.Component<HomeProps, HomeState> {
	constructor (props: HomeProps) {
		super(props)
		this.state = {
			authors: this.props.authors,
		}
	}
	render () {
		return (
			<div className="container">
				<h1>Hello World!</h1>
				<p>Here are some authors:</p>
				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th/>
						</tr>
					</thead>
					<tbody>
						{this.state.authors.map(author => {
							return (
								<tr key={author.id}>
									<td>{author.id}</td>
									<td>{author.name}</td>
									<td>
										<button type="button" className="btn btn-sm btn-primary">See Books</button>
										{'\n'}
										<button type="button" className="btn btn-sm btn-primary">Edit</button>
										{'\n'}
										<button type="button" className="btn btn-sm btn-danger">Delete</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<div>
					<button
						type="button"
						className="btn btn-primary btn-lg"
						onClick={this.onClickNew.bind(this)}
					>
						New Author
					</button>
				</div>
			</div>
		)
	}

	async onClickNew () {
		const response = await window.fetch('new', {
			method: 'POST',
		})
		const author: AuthorInstance = await response.json()
		this.setState(state => ({
			authors: state.authors.concat(author)
		}))
	}
}
