import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NavBar, UINoteCardCollection} from "./ui-components";
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
        <NavBar/><UINoteCardCollection/>
      </header></div>
    );
}
}

export default withAuthenticator(App);