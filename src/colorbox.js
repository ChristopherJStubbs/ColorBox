import React, { Component } from 'react'

class Colorbox extends Component {
	constructor(props) {
		super(props)

		this.state = {
			colors: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"],
			currentIndex: 0

		}
	}
	render() {
		let styles = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: "300px",
			height: "300px",
			backgroundColor: this.state.colors[this.state.currentIndex],
			color: this.state.colors[this.state.currentIndex + 1],
		}
    	return(
			<div className='colorbox'>
				<div style = {styles}>
					<p onClick={this.handleClick}>
						{this.state.colors[this.state.currentIndex]}
					</p>
				</div>
			</div>
	);
	}

	handleClick = () => {
		let { colors,  currentIndex } = this.state
		console.log('Clicked')
		if (currentIndex < colors.length -1){
		this.setState({currentIndex : currentIndex + 1})

	} else {

	 this.setState({currentIndex: 0})
		console.log(currentIndex);
	}
}
}

export default Colorbox
