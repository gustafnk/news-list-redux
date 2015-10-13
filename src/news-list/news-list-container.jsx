import React from 'react';
import NewsList from './news-list';

class NewsListContainer extends React.Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <NewsList { ...this.props } />
    );
  }
}

export default NewsListContainer;
