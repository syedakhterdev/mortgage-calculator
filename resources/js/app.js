/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import configureStore from './root.reducer';
import './sass/app.scss';

const store = configureStore({});

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Calculator} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App store={store}/>, document.getElementById('app'));
}

