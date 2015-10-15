import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { newsListReducers } from './news-list';
import { newsBodyReducers } from './news-body';

const reducers = combineReducers({
  newsList: newsListReducers,
  newsBody: newsBodyReducers,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default createStoreWithMiddleware(reducers);
