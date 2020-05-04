import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// let data = {
// 	title: 'Title',
// 	message: 'this is sample message.'
// };

let theme = {
	light: {
		backgroundColor: '#eef',
		color: '#006',
		padding: '10px',
	},
	dark: {
		backgroundColor: '#006',
		color: '#eef',
		padding: '10px',
	}
};

const ThemeContext = React.createContext(theme.dark);

// const SampleContext = React.createContext(data);

class App extends Component {

	static contextType = ThemeContext;

	// newdata = {
	// 	title: "新しいタイトル",
	// 	message: 'これは新しいメッセージです。'
	// };

  render() {
    return (
		<div style={this.context}>
			<h1>Context</h1>
				<Title value="Context page" />
				<Message value="This is context sample." />
				<Message value="※これはテーマのサンプルです。" />
			{/* <SampleContext.Provider value={this.newdata}>
				<Title />
				<Message />
			</SampleContext.Provider> */}
			<Title />
			<Message />
		</div>
    );
  }
}

class Title extends Component {
	// static contextType = SampleContext;
	static contextType = ThemeContext;

	render() {
		return(
			<div>
				<h2 style={this.context}>{this.props.value}</h2>
			</div>
		);
	}
}

class Message extends Component {
	// static contextType = SampleContext;
	static contextType = ThemeContext;

	render() {
		return(
			<div>
				<p style={this.context}>{this.props.value}</p>
			</div>
		);
	}
}

export default App;
