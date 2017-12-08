// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// internal modules
import App from './components/app';

// State and reducers
import messagesReducer from './reducers/messages_reducer';

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ], // TODO: get that from Rails DB.
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: (state = null, action) => state
});

// Middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// Render DOM
const chatContainer = document.getElementById('chat_app');
const store = createStore(reducers, initialState, middlewares);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
);
