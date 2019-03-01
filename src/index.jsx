import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
//MAKES 'STORE' AVAILABLE TO REACT COMPONENTS
import { Provider } from 'react-redux';
//CREATE A SINGLE REDUX STORE FOR ENTIRE APPLICATION
import { createStore } from 'redux';
import reducer from './reducers/reducer.js';
import App from './components/App';

export const store = createStore(reducer);
console.log(store)

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>,
  document.getElementById('react-app-root')
);

/*eslint-disable */
if(module.hot) {
  module.hot.accept();
}
/*eslint-disable */
