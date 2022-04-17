import React from 'react';
import './app.scss';
import me from '../src/img/headshot-wo-guitar.jpg';

const App = () => {
	return (
		<div className="container">
			<div className="header">
				<h1>App.js React</h1>
			</div>
			<div className="main">
				<img src={me} alt="" />
			</div>
		</div>
	);
};

export default App;
