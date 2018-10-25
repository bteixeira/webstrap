import * as React from 'react';

export interface HelloProps {name: string;}

export default class Hello extends React.Component<HelloProps> {
	render () {
		return (
			<div>
				Hello there, {this.props.name}!
			</div>
		)
	}
}
