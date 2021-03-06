import React from 'react';
import { connect } from 'react-redux';
import { getNewsBody } from './actions';
import NewsBody from './news-body';

class NewsBodyContainer extends React.Component {
  render() {
    return (
      <NewsBody { ...this.props } />
    );
  }
}

function mapStateToProps(state) {
  return state.newsBody;
}

function mapDispatchToProps(dispatch) {
  return {
    getNewsBody: () => dispatch(getNewsBody())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsBodyContainer);
