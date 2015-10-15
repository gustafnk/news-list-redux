import NewsBodyContainer from './news-body-container';
import { showNewsBody } from './actions';
import newsBodyReducers from './reducers';

export default {
  NewsBodyContainer,
  newsBodyReducers,
  actions: {
    showNewsBody,
  }
};
