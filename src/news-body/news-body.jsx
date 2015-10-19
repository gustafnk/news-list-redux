import React from 'react';

class NewsBody extends React.Component {

  componentWillUpdate(nextProps) {
    if (nextProps.id === this.props.id) return;

    this.props.getNewsBody(nextProps.id);
  }

  componentWillMount() {
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
