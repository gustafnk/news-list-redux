import React from 'react';
import { connect } from 'react-redux';
import { NewsListContainer, actions } from './news-list';

class App extends React.Component {
  render() {
    return (
      <NewsListContainer { ...this.props } />
    );
  }
}

function mapStateToProps(state) {
  return state.news;
}

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => dispatch(actions.getNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
