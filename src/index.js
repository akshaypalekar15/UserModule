import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './screens/Login';
import Tasks from './screens/Tasks';
import User from './screens/User';
import Home from './screens/Home';

const newHistory = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={newHistory}>
            <Route path='/' component={App} />
            <Route path='/Login' component={Login} />
            <Route path='/Home' component={Home} />
            <Route path='/Tasks' component={Tasks} />
            <Route path='/User' component={User} />
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
