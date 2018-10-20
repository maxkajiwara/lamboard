// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { ThreadPage, ProfilePage } from '../../components';

// Styling
const AppContainer = styled.div`
	display: flex;
	max-width: 1280px;
	height: 100vh;
	background: #c7e8f1;
	margin: 0 auto;
`;

class App extends Component {
	render() {
		return (
			<AppContainer>
				<Route exact path="/" component={TempApp} />
				{/* <Navbar /> */}
				{/* <Route exact path="/" component={HomePage} /> */}
				{/* <Route exact path="/boards/:boardName" component={BoardPage} /> */}
				<Route path="/boards/:threadId" component={ThreadPage} />
				<Route path="/users/:id" component={ProfilePage} />
				{/* <Route exact path="/register" component={SignupPage} /> */}
				{/* <Route exact path="/login" component={LoginPage} /> */}
			</AppContainer>
		);
	}
}
const TempApp = () => { // Added component to route to exact to '/' to test styles.
	return (
		<div className="placeholder">This component is temporary and just a placeholder for the homepage.</div>
	)
}
export default App;
