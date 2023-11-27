import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css'
import ReactDOM from 'react-dom';
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import studioTheme from './ui-components/studioTheme';
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root")
const root = createRoot(container)

Amplify.configure(awsconfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AmplifyProvider>
                <App/>
            </AmplifyProvider>
        </BrowserRouter>
    </React.StrictMode>    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();