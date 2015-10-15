import { NEWS_BODY_REQUEST, NEWS_BODY_REQUEST_SUCCESS, NEWS_BODY_REQUEST_FAILURE } from './action-types';
import thunk from 'redux-thunk';
import api from 'nordnet-next-api';

export function newsBodyRequest(data) {
  return {
    data,
    type: NEWS_BODY_REQUEST,
  };
}

export function newsBodyRequestSuccess(data) {
  return {
    data,
    type: NEWS_BODY_REQUEST_SUCCESS,
  };
}

export function newsBodyRequestFailure(data) {
  return  {
    data,
    type: NEWS_BODY_REQUEST_FAILURE,
  }
}

export default function getNewsBody() {
  return (dispatch, getState) => {
    const state = getState();
    const news_id = state.newsBody.selected;
    dispatch(newsBodyRequest({ news_id }));
    return api.get('/api/news/{news_id}', { news_id })
      .then(({ data }) => dispatch(newsBodyRequestSuccess(data)))
      .catch(({ data }) => dispatch(newsBodyRequestFailure(data)));
  };
}
