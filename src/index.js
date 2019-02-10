import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
const base = <Provider store={ store } ><Router><App/></Router></Provider>
ReactDOM.render(base, document.getElementById('root'));

