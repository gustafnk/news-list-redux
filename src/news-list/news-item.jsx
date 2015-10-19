import React from 'react';

class NewsItem extends React.Component {

  getHashLink() {
    const { news_id } = this.props.newsItem;
    return '#/news/' + news_id;
  }

  render() {
    return (
      <li>
        <a href={ this.getHashLink() }>{ this.props.newsItem.headline }</a>
      </li>
    );
  }
}

NewsItem.propTypes = {
  newsItem: React.PropTypes.object.isRequired,
};

export default NewsItem;
