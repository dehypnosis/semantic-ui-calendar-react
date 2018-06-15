'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('..');

var _lib = require('../../lib');

var _COMPONENT_TYPES = require('../../lib/COMPONENT_TYPES.js');

var _components = require('../../components');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_YearPickerMixin) {
  _inherits(DateInput, _YearPickerMixin);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

    _this.state = {
      yearsStart: props.wrapperState.dateToShow.year() - 6 // int
    };
    return _this;
  }

  _createClass(DateInput, [{
    key: 'getPicker',
    value: function getPicker() {
      var _props$wrapperState = this.props.wrapperState,
          mode = _props$wrapperState.mode,
          handleHeaderDateClick = _props$wrapperState.handleHeaderDateClick,
          onYearChange = _props$wrapperState.onYearChange,
          showNextYear = _props$wrapperState.showNextYear,
          showPrevYear = _props$wrapperState.showPrevYear,
          dateToShow = _props$wrapperState.dateToShow,
          onMonthChange = _props$wrapperState.onMonthChange,
          showNextMonth = _props$wrapperState.showNextMonth,
          showPrevMonth = _props$wrapperState.showPrevMonth,
          onDateClick = _props$wrapperState.onDateClick,
          activeDate = _props$wrapperState.activeDate;

      return _react2.default.createElement(
        _semanticUiReact.Table,
        {
          unstackable: true,
          celled: true,
          textAlign: 'center' },
        _react2.default.createElement(_components.DatePickerContent, {
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
          yearsRange: this.getYearsRange(),
          onPrevBtnClick: this.onPrevBtnClick,
          onNextBtnClick: this.onNextBtnClick })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          popupPosition = _props.popupPosition,
          inline = _props.inline,
          value = _props.value;

      var rest = (0, _lib.getUnhandledProps)(DateInput, this.props);

      var inputElement = _react2.default.createElement(_.CustomInput, _extends({}, rest, {
        value: value,
        onChange: this.props.wrapperState.onDateChange,
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

  return DateInput;
}(_.YearPickerMixin);

DateInput.META = {
  type: _COMPONENT_TYPES.DATE_INPUT,
  name: 'DateInput'
};
DateInput.handledProps = ['icon', 'inline', 'popupPosition', 'value', 'wrapperState'];


DateInput.propTypes = {
  /** Same as semantic-ui-react Input's ``icon`` prop. */
  icon: _propTypes2.default.any,
  popupPosition: _customPropTypes.CustomPropTypes.popupPosition,
  inline: _propTypes2.default.bool,
  value: _propTypes2.default.string,
  wrapperState: _customPropTypes.CustomPropTypes.wrapperState
};

DateInput.defaultProps = {
  icon: 'calendar',
  inline: false,
  value: ''
};

var WrappedDateInput = (0, _.withStateInput)(DateInput);

exports.default = WrappedDateInput;
exports.DateInput = WrappedDateInput;