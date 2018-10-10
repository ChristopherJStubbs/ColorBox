import React, { Component } from 'react';
import './App.css';
import Colorbox from './colorbox.js'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			colors: []

		}
	}

	render() {
		// this.state.colors
		return (
			<div className="App">
				<Colorbox />
			</div>
		);
	}
}



export default App;
