import React from 'react';
import { connect } from 'react-redux';
import { getNewsBody } from './actions';
import NewsBody from './news-body';

class NewsBodyContainer extends React.Component {
  render() {
    return (
      <div>

      <NewsBody { ...this.props } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.newsBody;
}

function mapDispatchToProps(dispatch) {
  return {
    getNewsBody: (id) => dispatch(getNewsBody(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsBodyContainer);
