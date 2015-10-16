import React from 'react';
import { connect } from 'react-redux';
import { NewsListContainer } from './news-list';
import NewsBody from './news-body';

const { NewsBodyContainer, actions: newsBodyActions } = NewsBody;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showNewsBody = this.showNewsBody.bind(this);
  }

  showNewsBody(data) {
    this.props.showNewsBody(data);
  }

  render() {
    return (
      <div>
        <NewsBodyContainer { ...this.props } />
        <NewsListContainer showNewsBody={ this.showNewsBody } { ...this.props } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    showNewsBody: data => dispatch(newsBodyActions.showNewsBody(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
