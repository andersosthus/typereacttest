/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/react/react.d.ts"/>
import React = require('react');

var TestView = React.createClass({
  render() {
    return React.DOM.div({}, 'TESTVIEW');
  }
});

export = TestView;
