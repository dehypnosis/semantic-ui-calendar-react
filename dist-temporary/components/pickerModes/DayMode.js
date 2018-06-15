'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayMode = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('..');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DayMode(props) {
  var handleHeaderDateClick = props.handleHeaderDateClick,
      showNextMonth = props.showNextMonth,
      showPrevMonth = props.showPrevMonth,
      dateToShow = props.dateToShow,
      onDateClick = props.onDateClick,
      activeDate = props.activeDate;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_.PickerHeader, {
      onDateClick: handleHeaderDateClick,
      onNextBtnClick: showNextMonth,
      onPrevBtnClick: showPrevMonth,
      activeDate: dateToShow,
      showWeeks: true,
      width: '7' }),
    _react2.default.createElement(_.DatePickerComponent, {
      onDateClick: onDateClick,
      activeDate: activeDate,
      showedMonth: dateToShow })
  );
}

DayMode.handledProps = ['activeDate', 'dateToShow', 'handleHeaderDateClick', 'onDateClick', 'showNextMonth', 'showPrevMonth'];
DayMode.propTypes = {
  handleHeaderDateClick: _propTypes2.default.func,
  showNextMonth: _propTypes2.default.func,
  showPrevMonth: _propTypes2.default.func,
  dateToShow: _customPropTypes.CustomPropTypes.dateToShow,
  onDateClick: _propTypes2.default.func,
  activeDate: _customPropTypes.CustomPropTypes.activeDate
};

exports.default = DayMode;
exports.DayMode = DayMode;