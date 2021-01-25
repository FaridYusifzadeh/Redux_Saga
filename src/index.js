import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer.js';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); // add rootReducer in store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
