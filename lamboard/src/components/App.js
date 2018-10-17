// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom'; // commented this out to stop unused error from console: "'Route' is defined but never used  no-unused-vars"
import styled from 'styled-components';

// Components
// import Navbar from './Navbar';
// import HomePage from './HomePage';
// import BoardPage from './BoardPage';
// import ThreadPage from './ThreadPage';
// import ProfilePage from './ProfilePage';
// import SignupPage from './SignupPage';
// import LoginPage from './LoginPage';

const AppContainer = styled.div`
	display: flex;
	max-width: 880px;
	height: 100%;
	background: #f3f3f3;
	margin: 0 auto;
`;

class App extends Component {
	render() {
		return (
			<AppContainer>
				{/* <Navbar /> */}
				<div>Placeholder text</div>
				{/* <Route exact path="/" component={HomePage} /> */}
				{/* <Route exact path="/:boardName" component={BoardPage} /> */}
				{/* <Route path="/:boardName/:commentId" component={ThreadPage} /> */}
				{/* <Route path="/profiles/:id" component={ProfilePage} /> */}
				{/* <Route exact path="/" component={SignupPage} /> */}
				{/* <Route exact path="/" component={LoginPage} /> */}
			</AppContainer>
		);
	}
}

export default App;
