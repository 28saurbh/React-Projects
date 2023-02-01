import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import {store} from './Redux/redux/store'
// import { store } from './NotesAppRedux/Redux/store';
// import {store} from './loginRedux/redux/store'
// import {store} from './product&cart/redux/store'
import {store} from './Cart-App/redux/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>

        {/* <App/> */}

        <Provider store={store}>
            <App />
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


