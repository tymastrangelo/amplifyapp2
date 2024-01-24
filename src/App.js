import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {UINavBar, UINewShirt, ShirtCard2Collection, ShirtCreateForm} from "./ui-components";
import { Routes, Route } from 'react-router-dom'
import EditShirt from './EditShirt';
import CustomShirtCard2 from './ui-components/ShirtCard2OverrideTest';
import CustomShirtCard2Collection from './ui-components/ShirtCard2CollectionOverride';
import CustomUINewShirt from './ui-components/CustomUINewShirt';
import UINewShirtWithUpload from './ui-components/UINewShirtWithUpload';
import MyCustomComponent from './ui-components/MyCustomComponent';


class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
            <Routes>
                <Route exact path='/' element={<div><UINavBar/><ShirtCard2Collection/></div>}/>
                <Route exact path='/NewShirt' element={<div><UINewShirt/></div>}/>
                <Route exact path='/EditShirt/:cid' element={<EditShirt/>}/>
                <Route exact path='/NewShirtUpload' element={<ShirtCreateForm />}/>

                {/*testing*/}
                <Route exact path='/UINewShirtWithUpload' element={<div><UINavBar/><UINewShirtWithUpload/></div>}/>
                <Route exact path='/MyCustomComponent' element={<div><UINavBar/><MyCustomComponent/></div>}/>
                <Route exact path='/CustomShirtCard2Collection' element={<div><UINavBar/><CustomShirtCard2Collection/></div>}/>
                <Route exact path='/CustomUINewShirt' element={<div><CustomUINewShirt/></div>}/>
                <Route exact path='/CustomShirtCard2' element={<div><CustomShirtCard2/></div>}/>
            </Routes>

            </header></div>
    )
    }
}

export default withAuthenticator(App);