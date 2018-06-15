'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePickerContent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('..');

var _DatePickerContent = require('./DatePickerContent');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DateTimePickerContent(props) {
  var activeDate = props.activeDate,
      activeHour = props.activeHour,
      activeMinute = props.activeMinute,
      mode = props.mode,
      handleHeaderDateClick = props.handleHeaderDateClick,
      handleHeaderTimeClick = props.handleHeaderTimeClick,
      onYearChange = props.onYearChange,
      showNextMonth = props.showNextMonth,
      showPrevMonth = props.showPrevMonth,
      showNextYear = props.showNextYear,
      showPrevYear = props.showPrevYear,
      showNextDay = props.showNextDay,
      showPrevDay = props.showPrevDay,
      dateToShow = props.dateToShow,
      onMonthChange = props.onMonthChange,
      onDateClick = props.onDateClick,
      onHourClick = props.onHourClick,
      onMinuteClick = props.onMinuteClick,
      yearsRange = props.yearsRange,
      onPrevBtnClick = props.onPrevBtnClick,
      onNextBtnClick = props.onNextBtnClick;

  var headerWidth = mode === 'minute' ? '3' : mode === 'hour' ? '4' : '7';
  if (mode !== 'hour' && mode !== 'minute') {
    return _react2.default.createElement(_DatePickerContent.DatePickerContent, {
      mode: mode,
      handleHeaderDateClick: handleHeaderDateClick,
      onYearChange: onYearChange,
      showNextYear: showNextYear,
      showPrevYear: showPrevYear,
      dateToShow: dateToShow,
      onMonthChange: onMonthChange,
      showNextMonth: showNextMonth,
      showPrevMonth: showPrevMonth,
      onDateClick: onDateClick,
      activeDate: activeDate,
      yearsRange: yearsRange,
      onPrevBtnClick: onPrevBtnClick,
      onNextBtnClick: onNextBtnClick });
  }
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_.PickerHeader, {
      onDateClick: handleHeaderTimeClick,
      onNextBtnClick: showNextDay,
      onPrevBtnClick: showPrevDay,
      activeDate: activeDate,
      includeDay: true,
      width: headerWidth }),
    _react2.default.createElement(_.TimePickerComponent, {
      mode: mode,
      activeHour: activeHour,
      activeMinute: activeMinute,
      onHourClick: onHourClick,
      onMinuteClick: onMinuteClick })
  );
}

DateTimePickerContent.handledProps = ['activeDate', 'activeHour', 'activeMinute', 'dateToShow', 'handleHeaderDateClick', 'handleHeaderTimeClick', 'mode', 'onDateClick', 'onHourClick', 'onMinuteClick', 'onMonthChange', 'onNextBtnClick', 'onPrevBtnClick', 'onYearChange', 'showNextDay', 'showNextMonth', 'showNextYear', 'showPrevDay', 'showPrevMonth', 'showPrevYear', 'yearsRange'];
DateTimePickerContent.propTypes = {
  activeDate: _customPropTypes.CustomPropTypes.activeDate,
  activeHour: _propTypes2.default.string,
  activeMinute: _propTypes2.default.string,
  mode: _propTypes2.default.string,
  handleHeaderDateClick: _propTypes2.default.func,
  handleHeaderTimeClick: _propTypes2.default.func,
  onYearChange: _propTypes2.default.func,
  showNextMonth: _propTypes2.default.func,
  showPrevMonth: _propTypes2.default.func,
  showNextYear: _propTypes2.default.func,
  showPrevYear: _propTypes2.default.func,
  showNextDay: _propTypes2.default.func,
  showPrevDay: _propTypes2.default.func,
  dateToShow: _customPropTypes.CustomPropTypes.dateToShow,
  onMonthChange: _propTypes2.default.func,
  onDateClick: _propTypes2.default.func,
  onHourClick: _propTypes2.default.func,
  onMinuteClick: _propTypes2.default.func,
  yearsRange: _customPropTypes.CustomPropTypes.yearsRange,
  onPrevBtnClick: _propTypes2.default.func,
  onNextBtnClick: _propTypes2.default.func
};

exports.default = DateTimePickerContent;
exports.DateTimePickerContent = DateTimePickerContent;