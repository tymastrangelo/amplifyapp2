//before routing app.js

import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NewNavBar, UINoteCardCollection, NoteCreateForm} from "./ui-components";
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">        
        <NewNavBar/>
        <NoteCreateForm/>
        <UINoteCardCollection/>
      </header></div>
    );
}
}

export default withAuthenticator(App);