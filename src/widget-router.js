import React from 'react';
import Route from 'route-parser';

// TODO Extract to own repo and npm module

// TODO Refactor to DRY

// Adopted from https://github.com/asbjornenge/tiny-react-router
export default class WidgetRouter extends React.Component {
  constructor(props) {
    super(props);
    const routes = Object.keys(this.props.routes).map((route) => {
      return { route: new Route(route), handler: this.props.routes[route] };
    });
    this.state = { routes: routes };
  }

  render() {
    return this.getComponent();
  }

  getComponent() {
    let url = this.state.url ? this.state.url : this.props.initialUrl;

    if (!url) url = '/';

    return this.state.routes.reduce((def, route) => {
      const props = route.route.match(url);

      if (props) return this.createElement(route.handler, props);

      return def;
    }, <div>404 not found</div>);
  }

  createElement(Handler, props) {
    return <Handler {...this.props} {...props} />;
  }

  // From the TurboLinks source, https://github.com/rails/turbolinks/blob/master/lib/assets/javascripts/turbolinks.coffee
  getAnchorLinkFromElement(element) {
    let linkElement = element;
    while (linkElement.parentNode && linkElement.nodeName !== 'A') {
      linkElement = linkElement.parentNode;
    }

    if (linkElement.nodeName === 'A' && linkElement.href.length !== 0) {
      const type = linkElement.getAttribute('data-external') ? 'external' : 'anchor';
      return {type: type, link: linkElement};
    }
  }

  getHashFromUrlString(urlString) {
    const url = document.createElement('a');
    url.href = urlString;
    return url.hash;
  }

  validate(e) {

    const link = this.getAnchorLinkFromElement(e.target);

    if (!link) return;

    var url;
    if (link.type === 'anchor') {
      const hash = this.getHashFromUrlString(link.link);
      url = hash.slice(1);
    } else {
      return false;
    }

    return this.state.routes.reduce((def, route) => {
      const props = route.route.match(url);

      if (props) return url;

      return def;
    }, undefined);
  }

  validateAndUpdateState(e) {
    var match = this.validate.bind(this)(e);
    if (match) {
      e.preventDefault();
      e.stopPropagation();
      this.updateState.bind(this)(e);
    }
  }

  updateState(e) {
    const link = this.getAnchorLinkFromElement(e.target);

    if (!link) return;

    if (link.type === 'anchor') {
      const hash = this.getHashFromUrlString(link.link);
      if (this._mounted) this.setState({ url: hash.slice(1) });
    }
  }

  componentDidMount() {
    this._mounted = true;
    const rootElement = this.findWidgetRootElement.bind(this)();
    rootElement.addEventListener('click', this.validateAndUpdateState.bind(this));
  }

  componentWillUnmount() {
    this._mounted = false;
    const rootElement = this.findWidgetRootElement.bind(this)();
    rootElement.removeEventListener('click', this.validateAndUpdateState.bind(this));
  }

  findWidgetRootElement() {
    let domElement = React.findDOMNode(this);

    while (domElement.parentNode
      && domElement.getAttribute('data-widget-container') !== 'true' // React
      && domElement.getAttribute('data-widget-container') !== '' // Regular DOM
    ) {
      domElement = domElement.parentNode;
    }

    return domElement;
  }
}
