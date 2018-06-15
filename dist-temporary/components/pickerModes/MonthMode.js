'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthMode = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('..');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MonthMode(props) {
  var handleHeaderDateClick = props.handleHeaderDateClick,
      showNextYear = props.showNextYear,
      showPrevYear = props.showPrevYear,
      dateToShow = props.dateToShow,
      onMonthChange = props.onMonthChange;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_.PickerHeader, {
      onDateClick: handleHeaderDateClick,
      onNextBtnClick: showNextYear,
      onPrevBtnClick: showPrevYear,
      activeYear: dateToShow.format('YYYY'),
      width: '3' }),
    _react2.default.createElement(_.MonthPickerComponent, {
      activeMonth: dateToShow.format('MMM'),
      onMonthClick: onMonthChange })
  );
}

MonthMode.handledProps = ['dateToShow', 'handleHeaderDateClick', 'onMonthChange', 'showNextYear', 'showPrevYear'];
MonthMode.propTypes = {
  handleHeaderDateClick: _propTypes2.default.func,
  showNextYear: _propTypes2.default.func,
  showPrevYear: _propTypes2.default.func,
  dateToShow: _customPropTypes.CustomPropTypes.dateToShow,
  onMonthChange: _propTypes2.default.func
};

exports.default = MonthMode;
exports.MonthMode = MonthMode;