import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import { store, PersistStore } from './Redux/Store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <PersistGate persistor={PersistStore}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
