'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearMode = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('..');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function YearMode(props) {
  var onHeaderDateClick = props.onHeaderDateClick,
      yearsRange = props.yearsRange,
      onPrevBtnClick = props.onPrevBtnClick,
      onNextBtnClick = props.onNextBtnClick,
      onYearClick = props.onYearClick,
      value = props.value;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_.PickerHeader, {
      width: '3',
      onDateClick: onHeaderDateClick,
      activeYears: yearsRange,
      onPrevBtnClick: onPrevBtnClick,
      onNextBtnClick: onNextBtnClick }),
    _react2.default.createElement(_.YearPickerComponent, {
      onYearClick: onYearClick,
      activeYear: value,
      yearsStart: yearsRange.start })
  );
}

YearMode.handledProps = ['onHeaderDateClick', 'onNextBtnClick', 'onPrevBtnClick', 'onYearClick', 'value', 'yearsRange'];
YearMode.propTypes = {
  onHeaderDateClick: _propTypes2.default.func,
  yearsRange: _customPropTypes.CustomPropTypes.yearsRange,
  onPrevBtnClick: _propTypes2.default.func,
  onNextBtnClick: _propTypes2.default.func,
  onYearClick: _propTypes2.default.func,
  value: _propTypes2.default.string
};

exports.default = YearMode;
exports.YearMode = YearMode;