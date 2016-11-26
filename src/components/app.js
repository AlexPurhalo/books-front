// Node modules import
import React, { Component } from 'react'

// Layout component
export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="parent-element-to-style">
					Color: green
					<div className="child-element-to-style">
						Color: red
					</div>
				</div>
			</div>
		);
	}
}
