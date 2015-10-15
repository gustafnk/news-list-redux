import React from 'react';
import { NewsListContainer } from './news-list';
import { NewsBodyContainer } from './news-body';

class App extends React.Component {
  render() {
    return (
      <div>
        <NewsBodyContainer { ...this.props } />
        <NewsListContainer { ...this.props } />
      </div>
    );
  }
}

export default App;
