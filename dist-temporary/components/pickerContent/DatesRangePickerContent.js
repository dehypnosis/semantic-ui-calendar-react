'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatesRangePickerContent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('..');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatesRangePickerContent(props) {
  var handleHeaderDateClick = props.handleHeaderDateClick,
      showNextMonth = props.showNextMonth,
      showPrevMonth = props.showPrevMonth,
      dateToShow = props.dateToShow,
      datesRange = props.datesRange,
      setDatesRange = props.setDatesRange;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_.PickerHeader, {
      onDateClick: handleHeaderDateClick,
      onNextBtnClick: showNextMonth,
      onPrevBtnClick: showPrevMonth,
      activeDate: dateToShow,
      activeDatesRange: datesRange,
      showWeeks: true,
      width: '7' }),
    _react2.default.createElement(_.DatePickerComponent, {
      datesRange: datesRange,
      onDateClick: setDatesRange,
      showedMonth: dateToShow })
  );
}

DatesRangePickerContent.handledProps = ['dateToShow', 'datesRange', 'handleHeaderDateClick', 'setDatesRange', 'showNextMonth', 'showPrevMonth'];
DatesRangePickerContent.propTypes = {
  handleHeaderDateClick: _propTypes2.default.func,
  showNextMonth: _propTypes2.default.func,
  showPrevMonth: _propTypes2.default.func,
  dateToShow: _customPropTypes.CustomPropTypes.dateToShow,
  datesRange: _customPropTypes.CustomPropTypes.datesRange,
  setDatesRange: _propTypes2.default.func
};

exports.default = DatesRangePickerContent;
exports.DatesRangePickerContent = DatesRangePickerContent;