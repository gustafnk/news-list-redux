import { NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } from './../actions';

const initialState = false;

export default function hasLoaded(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST_SUCCESS:
      return true;
    case NEWS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
