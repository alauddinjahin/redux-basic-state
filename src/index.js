import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// redux 
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

// store and managestate 

let myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// store.subscribe(()=> console.log(store.getState()));

// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

