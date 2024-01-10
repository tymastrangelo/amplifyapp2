import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {UINavBar, ShirtCardCollection, UINewShirt, ShirtCard2Collection, UIEditShirt, ShirtCreateForm} from "./ui-components";
import { Routes, Route } from 'react-router-dom'
import EditShirt from './EditShirt';

class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
            <Routes>
                <Route exact path='/' element={<div><UINavBar/><ShirtCard2Collection/></div>}/>
                <Route exact path='/NewShirt' element={<div><UINewShirt/></div>}/>
                <Route exact path='/EditShirt/:cid' element={<EditShirt/>}/>
                <Route exact path='/NewShirtUpload' element={<ShirtCreateForm />}/>
            </Routes>

            </header></div>
    )
    }
}

export default withAuthenticator(App);