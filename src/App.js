import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {UINoteCardCollection, UINewNote, NewNavBar} from "./ui-components";
import { Routes, Route } from 'react-router-dom'

class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
            <Routes>
                <Route exact path='/' element={<div><NewNavBar/><UINoteCardCollection/></div>}/>
                <Route exact path='/NewNote' element={<UINewNote/>}/>
            </Routes>
            </header></div>
    )
    }
}

export default withAuthenticator(App);