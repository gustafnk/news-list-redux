import React from 'react';
import { connect } from 'react-redux';
import { getNews } from './actions';
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

function mapStateToProps(state) {
  return state.newsList;
}

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => dispatch(getNews()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListContainer);
