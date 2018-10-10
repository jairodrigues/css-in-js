import React, { Component } from 'react';
import { ThemeProvider } from 'glamorous';

import Card from './cards';

const theme = {
	default: {
		background: '#f3f3f3',
		color: 'red',
	},
	dark: {
		background: '#231919',
		color: 'blue',
	},
};

class App extends Component {
	state = {
		currentTheme: 'default',
	};

	handleClick = () => {
		this.setState(state => ({
			currentTheme: state.currentTheme === 'default' ? 'dark' : 'default',
		}));
	};

	render() {
		const currentTheme = this.state.currentTheme;
		return (
			<ThemeProvider theme={theme[currentTheme]}>
				<React.Fragment>
					<Card />
					<button onClick={this.handleClick}>Toggle theme</button>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
