import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import newsFeedReducer from './reducers/newsFeedReducer';
import navigationReducer from './reducers/navigationReducer';
import searchTermReducers from './reducers/searchTermReducer';
import promiseMiddleware from 'redux-promise';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      news: newsFeedReducer,
      searchTerm: searchTermReducer,
      navigation: navigationReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
