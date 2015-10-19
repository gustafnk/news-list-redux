import React from 'react';
import { connect } from 'react-redux';
import { NewsListContainer } from './news-list';
import { NewsBodyContainer } from './news-body';

import WidgetRouter from './widget-router';


class NewsListAndBodyContainer extends React.Component {

  render() {
    return (
      <div>
        <NewsBodyContainer {...this.props} />
        <NewsListContainer {...this.props} />
      </div>
    );
  }
}

const routes = {
  '/news': NewsListContainer,
  '/news/:id': NewsListAndBodyContainer
};

class App extends React.Component {

  render() {
    return (
      <div data-widget-container>
        <WidgetRouter routes={routes} initialUrl='/news' />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
