import React from 'react';

class NewsBody extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.isFetchingChanged(nextProps) || this.isNewNewsBodySelected(nextProps);
  }

  componentWillUpdate(nextProps) {
    if (this.isNewNewsBodySelected(nextProps)) {
      this.props.getNewsBody();
    }
  }

  render() {
    if(this.props.isFetching) {
      return (
        <div>Loading news body..</div>
      );
    }

    const newsBody = this.props.newsBody[this.props.selected];
    return (
      <div>{ newsBody ? newsBody.body : '' }</div>
    );
  }

  isFetchingChanged({ isFetching }) {
    return isFetching || (this.props.isFetching && !isFetching);
  }

  isNewNewsBodySelected({ selected }) {
    return (!this.props.selected && selected) ||
      (this.props.selected && selected && this.props.selected !== selected);
  }
}

export default NewsBody;
