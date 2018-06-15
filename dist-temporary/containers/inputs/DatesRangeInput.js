'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatesRangeInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lib = require('../../lib');

var _COMPONENT_TYPES = require('../../lib/COMPONENT_TYPES');

var _pickerContent = require('../../components/pickerContent');

var _ = require('../');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatesRangeInput = function (_React$Component) {
  _inherits(DatesRangeInput, _React$Component);

  function DatesRangeInput() {
    _classCallCheck(this, DatesRangeInput);

    return _possibleConstructorReturn(this, (DatesRangeInput.__proto__ || Object.getPrototypeOf(DatesRangeInput)).apply(this, arguments));
  }

  _createClass(DatesRangeInput, [{
    key: 'getPicker',
    value: function getPicker() {
      var _props$wrapperState = this.props.wrapperState,
          handleHeaderDateClick = _props$wrapperState.handleHeaderDateClick,
          showNextMonth = _props$wrapperState.showNextMonth,
          showPrevMonth = _props$wrapperState.showPrevMonth,
          dateToShow = _props$wrapperState.dateToShow,
          datesRange = _props$wrapperState.datesRange,
          setDatesRange = _props$wrapperState.setDatesRange;

      return _react2.default.createElement(
        _semanticUiReact.Table,
        {
          unstackable: true,
          celled: true,
          textAlign: 'center' },
        _react2.default.createElement(_pickerContent.DatesRangePickerContent, {
          handleHeaderDateClick: handleHeaderDateClick,
          showNextMonth: showNextMonth,
          showPrevMonth: showPrevMonth,
          dateToShow: dateToShow,
          datesRange: datesRange,
          setDatesRange: setDatesRange })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          icon = _props.icon,
          popupPosition = _props.popupPosition,
          inline = _props.inline;


      var rest = (0, _lib.getUnhandledProps)(DatesRangeInput, this.props);
      var inputElement = _react2.default.createElement(_.CustomInput, _extends({}, rest, {
        onChange: onChange,
        icon: icon }));
      if (inline) {
        return this.getPicker();
      }
      return _react2.default.createElement(
        _.CustomPopup,
        {
          position: popupPosition,
          trigger: inputElement },
        this.getPicker()
      );
    }
  }]);

  return DatesRangeInput;
}(_react2.default.Component);

DatesRangeInput.META = {
  type: _COMPONENT_TYPES.DATES_RANGE_INPUT,
  name: 'DatesRangeInput'
};
DatesRangeInput.handledProps = ['icon', 'inline', 'onChange', 'popupPosition', 'wrapperState'];


DatesRangeInput.propTypes = {
  /** Called on change.
   * @param {SyntheticEvent} event React's original SyntheticEvent.
   * @param {object} data All props and proposed value.
  */
  onChange: _propTypes2.default.func,
  /** Same as semantic-ui-react Input's ``icon`` prop. */
  icon: _propTypes2.default.any,
  /** Character that used to divide dates in string. */
  popupPosition: _customPropTypes.CustomPropTypes.popupPosition,
  inline: _propTypes2.default.bool,
  wrapperState: _customPropTypes.CustomPropTypes.wrapperState
};

DatesRangeInput.defaultProps = {
  icon: 'calendar',
  inline: false
};

var WrappedDatesRangeInput = (0, _.withStateInput)(DatesRangeInput);

exports.default = WrappedDatesRangeInput;
exports.DatesRangeInput = WrappedDatesRangeInput;