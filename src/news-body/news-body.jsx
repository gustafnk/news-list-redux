import React from 'react';

class NewsBody extends React.Component {

  componentWillUpdate(nextProps) {
    // If this row is omitted, the result is a never ending loop, which is bad.
    // How can we make a design that is more fault tolerant against errors like that?
    if (nextProps.id === this.props.id) return;

    this.props.getNewsBody(nextProps.id);
  }

  componentWillMount() {
    if (!this.props.id) return;

    this.props.getNewsBody(this.props.id);
  }

  render() {
    if(this.props.isFetching) {
      return (
        <div>Loading news body..</div>
      );
    }

    const newsBody = this.props.newsBody[this.props.id];
    return (
      <div>{ newsBody ? newsBody.body : '' }</div>
    );
  }
}

export default NewsBody;
