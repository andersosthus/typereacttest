/// <reference path="../../typings/app.d.ts" />
require('./appView.css');

import React = require('react');
import NodeStore = require('../Stores/NodeStore');
import NodeActions = require('../Actions/NodeActions');
var tmp = NodeStore;

var AppView = React.createClass({
  componentDidMount() {
    NodeActions.startRefresh();
  },

  render() {
    return React.DOM.div({}, 'I AM ASYNC!');
  }
});

export = AppView;
