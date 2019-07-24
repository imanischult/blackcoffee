import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <Router>
        <App />
<<<<<<< HEAD
    </Router>
), document.getElementById('root'));
=======
    </Router>)
    , document.getElementById('root'));
>>>>>>> f789a2bed2fa3ae2e441b015c0175c3d06a4ac77

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
