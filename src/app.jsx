import React from 'react';
import { connect } from 'react-redux';
import NewsContainer from './news-container';
import WidgetRouter from './widget-router';


const routes = {
  '/news(/:id)': NewsContainer
};

class App extends React.Component {

  render() {
    return (
      <div>
        <span>Static header</span>
        <WidgetRouter routes={routes} initialUrl='/news' data-widget-container />
      </div>
    );
  }
}

export default connect()(App);
