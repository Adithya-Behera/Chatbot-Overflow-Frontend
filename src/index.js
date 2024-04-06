import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'


console.log("hi",import.meta.env);
const store = createStore( Reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <h1>Environment Variables</h1>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


