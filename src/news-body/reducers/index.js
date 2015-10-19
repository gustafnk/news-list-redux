import { combineReducers } from 'redux';
import newsBody from './news-body';
import isFetching from './news-body-is-fetching';

const newsBodyReducers = combineReducers({
  newsBody,
  isFetching,
});

export default newsBodyReducers;
