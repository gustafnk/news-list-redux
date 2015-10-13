import React from 'react';

class NewsItem extends React.Component {
  render() {
    return (
      <li>{ this.props.newsItem.headline }</li>
    );
  }
}

NewsItem.propTypes = {
  newsItem: React.PropTypes.object.isRequired,
};

export default NewsItem;
