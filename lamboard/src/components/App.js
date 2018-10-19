// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import ThreadPage from './ThreadPage';
// Components
import ExampleComponent from './exampleComponent';
// import Navbar from './Navbar';
// import HomePage from './HomePage';
// import BoardPage from './BoardPage';
// import ThreadPage from './ThreadPage';
// import ProfilePage from './ProfilePage';
// import SignupPage from './SignupPage';
// import LoginPage from './LoginPage';

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
        {/* <Navbar /> */}
        <Route exact path="/" component={ExampleComponent} />
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route exact path="/:boardName" component={BoardPage} /> */}
        <Route path="/:boardName/:threadId" component={ThreadPage} />
        {/* <Route path="/users/:id" component={ProfilePage} /> */}
        {/* <Route exact path="/register" component={SignupPage} /> */}
        {/* <Route exact path="/login" component={LoginPage} /> */}
      </AppContainer>
    );
  }
}

export default App;
