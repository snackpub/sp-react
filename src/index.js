import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {element} from './jsx/J1.js';
import * as serviceWorker from './serviceWorker';


function tick() {
  const element = (
    <div>
      <h1>Hello,tick</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    <React.StrictMode>
      {element}
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
