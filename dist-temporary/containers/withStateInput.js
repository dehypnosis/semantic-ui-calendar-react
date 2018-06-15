'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStateInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _lib = require('../lib');

var _COMPONENT_TYPES = require('../lib/COMPONENT_TYPES');

var _events = require('../lib/events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getPrevMode = function getPrevMode(mode, lastMode) {
  if (mode === 'minute') return 'hour';
  if (mode === 'hour') return 'day';
  if (mode === 'day') return 'month';
  if (mode === 'month') return 'year';
  return lastMode;
};

var getNextMode = function getNextMode(mode, lastMode) {
  if (mode === lastMode) return lastMode;
  if (mode === 'year') return 'month';
  if (mode === 'month') return 'day';
  if (mode === 'day') return 'hour';
  if (mode === 'hour') return 'minute';
  return lastMode;
};

var getTime = function getTime(_ref) {
  var _ref$hour = _ref.hour,
      hour = _ref$hour === undefined ? '00' : _ref$hour,
      _ref$minute = _ref.minute,
      minute = _ref$minute === undefined ? '00' : _ref$minute;

  return hour + ':' + minute;
};

var parseDate = function parseDate(value, format) {
  var date = (0, _moment2.default)(value, format);
  return date.isValid() ? date : (0, _moment2.default)();
};

function withStateInput(WrappedComponent) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_React$PureComponent) {
    _inherits(WithStateInput, _React$PureComponent);

    _createClass(WithStateInput, null, [{
      key: 'name',
      get: function get() {
        var wrappedComponentName = WrappedComponent.META && WrappedComponent.META.name;
        return wrappedComponentName ? wrappedComponentName : 'WithStateInput';
      }
    }]);

    function WithStateInput(props) {
      _classCallCheck(this, WithStateInput);

      var _this = _possibleConstructorReturn(this, (WithStateInput.__proto__ || Object.getPrototypeOf(WithStateInput)).call(this, props));

      _initialiseProps.call(_this);

      var value = props.value,
          dateFormat = props.dateFormat,
          startMode = props.startMode;

      var initialDate = value ? (0, _moment2.default)(value, dateFormat) : (0, _moment2.default)().startOf('month');
      _this.state = {
        dateToShow: initialDate, // moment
        month: '', // str
        year: '', // str
        activeHour: '', // str
        activeMinute: '', // str
        mode: startMode, // str
        datesRange: { start: null, end: null // { start: moment, end: moment }
        } };
      return _this;
    }

    _createClass(WithStateInput, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener(_events.EVENTS.DATE_CHANGE, this.updateDateToShow);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener(_events.EVENTS.DATE_CHANGE, this.updateDateToShow);
      }
    }, {
      key: 'render',
      value: function render() {
        var activeDate = parseDate(this.props.value, this.props.dateFormat);
        var wrapperState = _extends({}, this.state, {
          activeDate: activeDate,
          setDatesRange: this.setDatesRange,
          getDatesRange: this.setDatesRange,
          switchToPrevMode: this.switchToPrevMode,
          switchToNextMode: this.switchToNextMode,
          showNextYear: this.showNextYear,
          showPrevYear: this.showPrevYear,
          showNextMonth: this.showNextMonth,
          showPrevMonth: this.showPrevMonth,
          showNextDay: this.showNextDay,
          showPrevDay: this.showPrevDay,
          onDateClick: this.onDateClick,
          onHourClick: this.onHourClick,
          onMinuteClick: this.onMinuteClick,
          onYearChange: this.onYearChange,
          onMonthChange: this.onMonthChange,
          handleHeaderDateClick: this.handleHeaderDateClick,
          handleHeaderTimeClick: this.handleHeaderTimeClick,
          onDateChange: this.onDateChange,
          onTimeChange: this.onTimeChange,
          onDatesRangeChange: this.onDatesRangeChange
        });
        var rest = (0, _lib.getUnhandledProps)(WithStateInput, this.props);
        return _react2.default.createElement(WrappedComponent, _extends({}, rest, {
          onChange: this.props.onChange,
          value: this.props.value,
          wrapperState: wrapperState }));
      }
    }]);

    return WithStateInput;
  }(_react2.default.PureComponent), _class.propTypes = {
    /** Called on change.
     * @param {SyntheticEvent} event React's original SyntheticEvent.
     * @param {object} data All props and proposed value.
    */
    onChange: _propTypes2.default.func,
    /* Initial display mode for ``DatePicker`` and ``DateTimePicker``. */
    startMode: _propTypes2.default.oneOf(['year', 'month', 'day']),
    /* Selected value. */
    value: _propTypes2.default.string,
    /** Date formatting string.
     * Anything that that can be passed to ``moment().format``.
     */
    dateFormat: _propTypes2.default.string,
    /* Characters that separate date and time values. */
    divider: _propTypes2.default.string
  }, _class.defaultProps = {
    startMode: 'day',
    dateFormat: 'DD-MM-YYYY',
    divider: ' '
  }, _class.handledProps = ['dateFormat', 'divider', 'onChange', 'startMode', 'value'], _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.updateDateToShow = function () {
      if (_this2.props.value) {
        _this2.setState({ dateToShow: parseDate(_this2.props.value, _this2.props.dateFormat) });
      }
    };

    this.setDatesRange = function (event, data) {
      var onDatesRangeChange = _this2.onDatesRangeChange;

      _this2.setState(function (_ref2) {
        var datesRange = _ref2.datesRange;

        var newState = void 0;
        // reset dates range if it's already selected
        if (datesRange.start && datesRange.end) {
          newState = {
            datesRange: { start: null, end: null }
          };
          onDatesRangeChange(event, _extends({}, _this2.props, { value: _this2.getDatesRange() }));
        } else if (datesRange.start && datesRange.start.isAfter(data.value)) {
          // reset dates range on invalid input
          newState = {
            datesRange: { start: null, end: null }
          };
          onDatesRangeChange(event, _extends({}, _this2.props, { value: _this2.getDatesRange() }));
        } else if (datesRange.start) {
          // set dates range end
          newState = {
            datesRange: { start: datesRange.start, end: data.value }
          };
          var newRange = _this2.getDatesRange({
            start: datesRange.start,
            end: data.value
          });
          onDatesRangeChange(event, _extends({}, _this2.props, { value: newRange }));
        } else {
          // set dates range start
          newState = {
            datesRange: { start: data.value, end: datesRange.end }
          };
          var _newRange = _this2.getDatesRange({
            start: data.value,
            end: datesRange.end
          });
          onDatesRangeChange(event, _extends({}, _this2.props, { value: _newRange }));
        }
        return newState;
      });
    };

    this.getDatesRange = function (range) {
      var dateFormat = _this2.props.dateFormat;

      var _ref3 = range ? range : { start: null, end: null },
          start = _ref3.start,
          end = _ref3.end;

      var startStr = start && start.format ? start.format(dateFormat) : '';
      var endStr = end && end.format ? end.format(dateFormat) : '';
      if (startStr) return startStr + ' - ' + endStr;
      return '';
    };

    this.switchToPrevMode = function () {
      var lastMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'day';

      _this2.setState({ mode: getPrevMode(_this2.state.mode, lastMode) });
    };

    this.switchToNextMode = function () {
      var lastMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'day';

      _this2.setState({ mode: getNextMode(_this2.state.mode, lastMode) });
    };

    this.showNextYear = function () {
      _this2.setState(function (_ref4) {
        var dateToShow = _ref4.dateToShow;

        var nextYear = dateToShow.clone();
        nextYear.add(1, 'Y');
        return {
          dateToShow: nextYear,
          year: nextYear.format('YYYY')
        };
      });
    };

    this.showPrevYear = function () {
      _this2.setState(function (_ref5) {
        var dateToShow = _ref5.dateToShow;

        var prevYear = dateToShow.clone();
        prevYear.add(-1, 'Y');
        return {
          dateToShow: prevYear,
          year: prevYear.format('YYYY')
        };
      });
    };

    this.showNextMonth = function () {
      _this2.setState(function (_ref6) {
        var dateToShow = _ref6.dateToShow;

        var nextMonth = dateToShow.clone();
        nextMonth.add(1, 'M');
        return { dateToShow: nextMonth };
      });
    };

    this.showPrevMonth = function () {
      _this2.setState(function (_ref7) {
        var dateToShow = _ref7.dateToShow;

        var prevMonth = dateToShow.clone();
        prevMonth.add(-1, 'M');
        return { dateToShow: prevMonth };
      });
    };

    this.showNextDay = function () {
      if (WrappedComponent.META.type === _COMPONENT_TYPES.DATE_TIME_INPUT) _this2.resetMinutes();
      _this2.setState(function (_ref8) {
        var dateToShow = _ref8.dateToShow;

        var nextDay = dateToShow.clone();
        nextDay.add(1, 'd');
        _this2.onDateChange(null, { value: nextDay });
        return { dateToShow: nextDay };
      });
    };

    this.showPrevDay = function () {
      if (WrappedComponent.META.type === _COMPONENT_TYPES.DATE_TIME_INPUT) _this2.resetMinutes();
      _this2.setState(function (_ref9) {
        var dateToShow = _ref9.dateToShow;

        var prevDay = dateToShow.clone();
        prevDay.add(-1, 'd');
        _this2.onDateChange(null, { value: prevDay });
        return { dateToShow: prevDay };
      });
    };

    this.onDateClick = function (event, data) {
      (0, _lib.tick)(function () {
        _this2.onDateChange(event, data);
        _this2.switchToNextMode(WrappedComponent.META.type === _COMPONENT_TYPES.DATE_TIME_INPUT ? 'minute' : 'day');
        if (WrappedComponent.META.type === _COMPONENT_TYPES.DATE_TIME_INPUT) (0, _events.dispatchDateChange)();
      });
    };

    this.onHourClick = function (event, data) {
      (0, _lib.tick)(function () {
        _this2.setState(function () {
          return {
            activeHour: data.value
          };
        });
        _this2.switchToNextMode('minute');
      });
    };

    this.onMinuteClick = function (event, data) {
      _this2.setState(function (prevState) {
        var newValue = getTime({
          hour: prevState.activeHour,
          minute: data.value
        });
        _this2.onTimeChange(event, { value: newValue });
        return {
          activeMinute: data.value
        };
      });
    };

    this.onYearChange = function (event, data) {
      _this2.setState({
        dateToShow: (0, _moment2.default)({ year: data.value }),
        year: data.value
      });
      _this2.switchToNextMode();
    };

    this.onMonthChange = function (event, data) {
      var date = {
        year: _this2.state.dateToShow.year(),
        month: (0, _lib.monthIndex)(data.value)
      };
      _this2.setState({
        dateToShow: (0, _moment2.default)(date),
        month: data.value
      });
      _this2.switchToNextMode();
    };

    this.handleHeaderDateClick = function () {
      _this2.switchToPrevMode();
    };

    this.handleHeaderTimeClick = function () {
      _this2.switchToPrevMode('minute');
      _this2.resetMinutes();
      _this2.resetHours();
    };

    this.resetMinutes = function () {
      _this2.setState({ activeMinute: '' });
    };

    this.resetHours = function () {
      _this2.setState({ activeHour: '' });
    };

    this.onDateChange = function (event, data) {
      var newValue = data.value;
      if (newValue.format) {
        newValue = newValue.format(_this2.props.dateFormat);
      }
      _lodash2.default.invoke(_this2.props, 'onChange', event, _extends({}, _this2.props, { value: newValue }));
    };

    this.onTimeChange = function (event, data) {
      var _props = _this2.props,
          value = _props.value,
          dateFormat = _props.dateFormat,
          divider = _props.divider;

      var newValue = '' + (0, _moment2.default)(value, dateFormat).format(dateFormat) + divider + data.value;
      _lodash2.default.invoke(_this2.props, 'onChange', event, _extends({}, _this2.props, { value: newValue }));
    };

    this.onDatesRangeChange = function (event, data) {
      _lodash2.default.invoke(_this2.props, 'onChange', event, _extends({}, _this2.props, { value: data.value }));
    };
  }, _temp;
}

withStateInput.handledProps = [];
exports.default = withStateInput;
exports.withStateInput = withStateInput;