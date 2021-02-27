import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React, { Component } from 'react';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return <div></div>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('root')
);
