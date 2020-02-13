import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
//import App from './App';
import MyApp from './MyApp';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<MyApp />, document.getElementById('root'));

serviceWorker.unregister();
