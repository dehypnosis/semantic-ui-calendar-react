'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerContent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pickerModes = require('../pickerModes');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatePickerContent(props) {
  var mode = props.mode,
      handleHeaderDateClick = props.handleHeaderDateClick,
      onYearChange = props.onYearChange,
      showNextYear = props.showNextYear,
      showPrevYear = props.showPrevYear,
      dateToShow = props.dateToShow,
      onMonthChange = props.onMonthChange,
      showNextMonth = props.showNextMonth,
      showPrevMonth = props.showPrevMonth,
      onDateClick = props.onDateClick,
      activeDate = props.activeDate,
      yearsRange = props.yearsRange,
      onPrevBtnClick = props.onPrevBtnClick,
      onNextBtnClick = props.onNextBtnClick;

  if (mode === 'year') {
    var value = activeDate && activeDate.isValid() ? activeDate.format('YYYY') : '';
    return _react2.default.createElement(_pickerModes.YearMode, {
      onHeaderDateClick: handleHeaderDateClick,
      yearsRange: yearsRange,
      onPrevBtnClick: onPrevBtnClick,
      onNextBtnClick: onNextBtnClick,
      onYearClick: onYearChange,
      value: value });
  }
  if (mode === 'month') {
    return _react2.default.createElement(_pickerModes.MonthMode, {
      handleHeaderDateClick: handleHeaderDateClick,
      showNextYear: showNextYear,
      showPrevYear: showPrevYear,
      dateToShow: dateToShow,
      onMonthChange: onMonthChange });
  }
  return _react2.default.createElement(_pickerModes.DayMode, {
    handleHeaderDateClick: handleHeaderDateClick,
    showNextMonth: showNextMonth,
    showPrevMonth: showPrevMonth,
    dateToShow: dateToShow,
    onDateClick: onDateClick,
    activeDate: activeDate });
}

DatePickerContent.handledProps = ['activeDate', 'dateToShow', 'handleHeaderDateClick', 'mode', 'onDateClick', 'onMonthChange', 'onNextBtnClick', 'onPrevBtnClick', 'onYearChange', 'showNextMonth', 'showNextYear', 'showPrevMonth', 'showPrevYear', 'yearsRange'];
DatePickerContent.propTypes = {
  mode: _propTypes2.default.string,
  handleHeaderDateClick: _propTypes2.default.func,
  onYearChange: _propTypes2.default.func,
  showNextYear: _propTypes2.default.func,
  showPrevYear: _propTypes2.default.func,
  dateToShow: _customPropTypes.CustomPropTypes.dateToShow,
  onMonthChange: _propTypes2.default.func,
  showNextMonth: _propTypes2.default.func,
  showPrevMonth: _propTypes2.default.func,
  onDateClick: _propTypes2.default.func,
  activeDate: _customPropTypes.CustomPropTypes.activeDate,
  yearsRange: _customPropTypes.CustomPropTypes.yearsRange,
  onPrevBtnClick: _propTypes2.default.func,
  onNextBtnClick: _propTypes2.default.func
};

exports.default = DatePickerContent;
exports.DatePickerContent = DatePickerContent;