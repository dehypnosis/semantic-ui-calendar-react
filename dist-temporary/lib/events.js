'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dateChangeEvent = void 0;

if (typeof document !== 'undefined') {
  if (typeof Event === 'function') {
    dateChangeEvent = new Event('dateChange', { bubbles: false });
  } else {
    dateChangeEvent = document.createEvent('Event');
    dateChangeEvent.initEvent('dateChange', false, false);
  }
}

var dispatchDateChange = exports.dispatchDateChange = function dispatchDateChange() {
  if (dateChangeEvent) window.dispatchEvent(dateChangeEvent);
};

var EVENTS = exports.EVENTS = {
  DATE_CHANGE: 'dateChange'
};