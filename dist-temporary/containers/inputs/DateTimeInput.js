'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var _ = require('..');

var _lib = require('../../lib');

var _COMPONENT_TYPES = require('../../lib/COMPONENT_TYPES');

var _pickerContent = require('../../components/pickerContent');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeInput = function (_YearPickerMixin) {
  _inherits(DateTimeInput, _YearPickerMixin);

  function DateTimeInput(props) {
    _classCallCheck(this, DateTimeInput);

    var _this = _possibleConstructorReturn(this, (DateTimeInput.__proto__ || Object.getPrototypeOf(DateTimeInput)).call(this, props));

    _this.state = {
      yearsStart: props.wrapperState.dateToShow.year() - 6
    };
    return _this;
  }

  _createClass(DateTimeInput, [{
    key: 'getPicker',
    value: function getPicker() {
      var _props$wrapperState = this.props.wrapperState,
          dateToShow = _props$wrapperState.dateToShow,
          activeHour = _props$wrapperState.activeHour,
          activeMinute = _props$wrapperState.activeMinute,
          mode = _props$wrapperState.mode,
          handleHeaderDateClick = _props$wrapperState.handleHeaderDateClick,
          handleHeaderTimeClick = _props$wrapperState.handleHeaderTimeClick,
          onYearChange = _props$wrapperState.onYearChange,
          showNextMonth = _props$wrapperState.showNextMonth,
          showPrevMonth = _props$wrapperState.showPrevMonth,
          showNextYear = _props$wrapperState.showNextYear,
          showPrevYear = _props$wrapperState.showPrevYear,
          showNextDay = _props$wrapperState.showNextDay,
          showPrevDay = _props$wrapperState.showPrevDay,
          onMonthChange = _props$wrapperState.onMonthChange,
          onDateClick = _props$wrapperState.onDateClick,
          onHourClick = _props$wrapperState.onHourClick,
          onMinuteClick = _props$wrapperState.onMinuteClick;

      return _react2.default.createElement(
        _semanticUiReact.Table,
        {
          unstackable: true,
          celled: true,
          textAlign: 'center' },
        _react2.default.createElement(_pickerContent.DateTimePickerContent, {
          activeDate: dateToShow,
          activeHour: activeHour,
          activeMinute: activeMinute,
          mode: mode,
          handleHeaderDateClick: handleHeaderDateClick,
          handleHeaderTimeClick: handleHeaderTimeClick,
          onYearChange: onYearChange,
          showNextMonth: showNextMonth,
          showPrevMonth: showPrevMonth,
          showNextYear: showNextYear,
          showPrevYear: showPrevYear,
          showNextDay: showNextDay,
          showPrevDay: showPrevDay,
          dateToShow: dateToShow,
          onMonthChange: onMonthChange,
          onDateClick: onDateClick,
          onHourClick: onHourClick,
          onMinuteClick: onMinuteClick,
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
          onChange = _props.onChange,
          popupPosition = _props.popupPosition,
          inline = _props.inline,
          value = _props.value;

      var rest = (0, _lib.getUnhandledProps)(DateTimeInput, this.props);

      var inputElement = _react2.default.createElement(_.CustomInput, _extends({}, rest, {
        value: value,
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

  return DateTimeInput;
}(_.YearPickerMixin);

DateTimeInput.META = {
  type: _COMPONENT_TYPES.DATE_TIME_INPUT,
  name: 'DateTimeInput'
};
DateTimeInput.handledProps = ['icon', 'inline', 'onChange', 'popupPosition', 'value', 'wrapperState'];


DateTimeInput.propTypes = {
  /** Called on change.
   * @param {SyntheticEvent} event React's original SyntheticEvent.
   * @param {object} data All props and proposed value.
  */
  onChange: _propTypes2.default.func,
  /** Same as semantic-ui-react Input's ``icon`` prop. */
  icon: _propTypes2.default.any,
  popupPosition: _customPropTypes.CustomPropTypes.popupPosition,
  inline: _propTypes2.default.bool,
  value: _propTypes2.default.string,
  wrapperState: _customPropTypes.CustomPropTypes.wrapperState
};

DateTimeInput.defaultProps = {
  icon: 'calendar',
  inline: false,
  value: ''
};

var WrappedDateTimeInput = (0, _.withStateInput)(DateTimeInput);

exports.default = WrappedDateTimeInput;
exports.DateTimeInput = WrappedDateTimeInput;