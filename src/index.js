import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider  } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App'; // roditelj svih komponenti
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line no-unused-vars
import tachyons from './tachyons/css/tachyons.css';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(   
                 <provider store = {store}>
                 <App/>
                 </provider> ,  document.getElementById('root')
);

serviceWorker.unregister();
