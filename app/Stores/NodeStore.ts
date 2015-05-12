/// <reference path="../../typings/app.d.ts" />
import Reflux = require('reflux');
import Actions = require('../Actions/NodeActions');
import Rest = require('rest');

var _refresh = function() {
  Rest('http://localhost:19007/Nodes?api-version=1.0').then((response) => {
    console.log(response);
  });
};

var NodeStore = Reflux.createStore<string[]>({
  init() {
    this.listenTo(Actions.startRefresh, this.onStartRefresh);
    this.data = [];
    this.isRunning = false;
    this.timerId;
  },

  onStartRefresh() {
    /*
    if(!this.isRunning) {
      this.isRunning = true;
      this.timerId = setInterval(_refresh, 60000);
    }*/
    _refresh();
  },

  onStopRefresh() {
    if(this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timerId);
    }
  }
});

export = NodeStore;
