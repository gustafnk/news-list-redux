import { SHOW_NEWS_BODY } from './action-types';

export default function showNewsBody(data) {
  return {
    data,
    type: SHOW_NEWS_BODY,
  };
};
