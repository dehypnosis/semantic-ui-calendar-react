'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tick = exports.monthIndex = exports.getMonths = exports.getUnhandledProps = exports.getWeekDays = exports.isDayInMonth = exports.isActiveDate = exports.getArrayOfWeeks = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getCalendarStart = function _getCalendarStart(referenceDate) {
  return referenceDate.clone().startOf('month').startOf('week');
};

var getArrayOfWeeks = function getArrayOfWeeks(referenceDate) {
  var weeks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

  var weeksList = new Array(weeks);
  var day = _getCalendarStart(referenceDate).clone();
  for (var i = 0; i < weeksList.length; i++) {
    weeksList[i] = [];
    for (var j = 0; j < 7; j++) {
      weeksList[i][j] = day.clone();
      day.add(1, 'd');
    }
  }
  return weeksList;
};

/** Compare two `moment`'s by date. */
var compareDates = function compareDates(oneDate, otherDate) {
  if (!oneDate.year || !otherDate.year) return false;
  return oneDate.year() === otherDate.year() && oneDate.month() === otherDate.month() && oneDate.date() === otherDate.date();
};

/** Check if date should be showed as active in calendar.
 * Check if date is the same as `active` or is date included in given date's interval.
 * @param {moment} checkedDate Date which compared with `active`
 * @param {moment||{start: moment, end: moment}} active Eather date or date's interval as [start, end]
*/
var isActiveDate = function isActiveDate(checkedDate, active) {
  if (!checkedDate || !active) return false;
  if (active.hasOwnProperty('start') && active.hasOwnProperty('end')) {
    if (!active.start) {
      return;
    }
    if (!active.end) {
      return compareDates(checkedDate, active.start);
    }
    var normStart = (0, _moment2.default)({
      year: active.start.year(),
      month: active.start.month(),
      date: active.start.date()
    });
    var normEnd = (0, _moment2.default)({
      year: active.end.year(),
      month: active.end.month(),
      date: active.end.date()
    });
    var normCheckedDate = (0, _moment2.default)({
      year: checkedDate.year(),
      month: checkedDate.month(),
      date: checkedDate.date()
    });
    return normStart.isBefore(normCheckedDate) && normEnd.isAfter(normCheckedDate) || normStart.isSame(normCheckedDate) || normEnd.isSame(normCheckedDate);
  }
  return compareDates(checkedDate, active);
};

/** Check if given day is in the `date`'s month. */
var isDayInMonth = function isDayInMonth(day, date) {
  var currentMonth = date.month();
  return day.month() === currentMonth;
};

/** Return array of week day names.
 * 
 * getWeekDays() --> ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su']
 */
var getWeekDays = function getWeekDays() {
  var long = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var weekDays = [];
  var day = (0, _moment2.default)().startOf('week');
  for (var i = 0; i < 7; i++) {
    weekDays[i] = day.format(long ? 'dddd' : 'dd');
    day.add(1, 'd');
  }
  return weekDays;
};

/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
var getUnhandledProps = function getUnhandledProps(Component, props) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  var _Component$handledPro = Component.handledProps,
      handledProps = _Component$handledPro === undefined ? [] : _Component$handledPro;


  return Object.keys(props).reduce(function (acc, propKey) {
    if (propKey === 'childKey') return acc;
    if (handledProps.indexOf(propKey) === -1) acc[propKey] = props[propKey];
    return acc;
  }, {});
};

var getMonths = function getMonths() {
  return _moment2.default.monthsShort();
};

var monthIndex = function monthIndex(month) {
  return getMonths().indexOf(month);
};

/** Set zero timeout.
 * 
 * Sometimes we need to delay rerendering components
 * on one tick (if they are inside  `Popup` and rerendering could
 * change `Popup`'s content sizes).
 * Becouse it races with Popup's onclick handler.
 * `Popup` relies on it's content sizes when computing
 * should popup stay open or be closed. So we need
 * to wait until `Popup`'s onclick handler done its job.
 */
var tick = function tick(leadToRerendering) {
  setTimeout(leadToRerendering, 0);
};

exports.getArrayOfWeeks = getArrayOfWeeks;
exports.isActiveDate = isActiveDate;
exports.isDayInMonth = isDayInMonth;
exports.getWeekDays = getWeekDays;
exports.getUnhandledProps = getUnhandledProps;
exports.getMonths = getMonths;
exports.monthIndex = monthIndex;
exports.tick = tick;