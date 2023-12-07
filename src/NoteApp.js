import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {UINoteCardCollection, UINewNote, NewNavBar, UIEditNote, NoteCreateForm, UINoteCardNEW, UINoteCardNEWCollection, NoteUpdateForm} from "./ui-components";
import { Routes, Route } from 'react-router-dom'

class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
            <Routes>
                {/* <Route exact path='/' element={<div><NewNavBar/><UINoteCardCollection isPaginated itemsPerPage={1} /></div>}/> */}
                <Route exact path='/' element={<div><NewNavBar/><UINoteCardCollection/></div>}/>
                <Route exact path='/NewNote' element={<UINewNote/>}/>
                <Route exact path='/EditNote' element={<NoteUpdateForm/>}/>
                <Route exact path='/NoteCreateForm' element={<NoteCreateForm/>}/>
                <Route exact path='/UINoteCardNEW' element={<UINoteCardNEW/>}/>
            </Routes>
            </header></div>
    )
    }
}

export default withAuthenticator(App);