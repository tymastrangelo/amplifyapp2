import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NavBar, UINoteCardCollection, UINewNote, NoteCreateForm} from "./ui-components";
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">        
        <NavBar/>
        <UINewNote/>
        <NoteCreateForm/>
        <UINoteCardCollection/>
      </header></div>
    );
}
}

export default withAuthenticator(App);