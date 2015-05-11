/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/react/react.d.ts"/>
require('./appView.css');

import React = require('react');

var AppView = React.createClass({
  render() {
    return React.DOM.div({}, 'I AM ASYNC!');
  }
});

export = AppView;
