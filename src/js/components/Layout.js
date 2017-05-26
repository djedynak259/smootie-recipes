import React from 'react';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = 'wil!';
	}
	render () {
		return (
			<h1>It Worksssdsd {this.name}</h1>
		);
	}
}