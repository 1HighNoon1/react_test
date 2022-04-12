
import store , {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




let rerenderEntireTree = (state) =>{

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());



