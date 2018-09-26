import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById('root'))
}

render()
//to make sure any time the store is updated, the render function is invoked use store.subscribe(render)
store.subscribe(render)
registerServiceWorker();


function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
    console.log(store.getState())
}