import NewsListContainer from './news-list-container';
import { getNews } from './actions';
import newsReducers from './reducers';

export default {
  NewsListContainer,
  newsReducers,
  actions: {
    getNews,
  },
}
