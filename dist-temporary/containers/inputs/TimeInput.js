'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = require('semantic-ui-react');

var _2 = require('..');

var _lib = require('../../lib');

var _COMPONENT_TYPES = require('../../lib/COMPONENT_TYPES');

var _components = require('../../components');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parseTime = function parseTime(value) {
  var outFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm';

  if (value) return (0, _moment2.default)(value, 'HH:mm').format(outFormat);
  return '00';
};

var TimeInput = function (_React$Component) {
  _inherits(TimeInput, _React$Component);

  function TimeInput(props) {
    _classCallCheck(this, TimeInput);

    var _this = _possibleConstructorReturn(this, (TimeInput.__proto__ || Object.getPrototypeOf(TimeInput)).call(this, props));

    _this.onPopupClose = function () {
      _this.setState({ mode: 'hour' });
    };

    _this.onTimeUpdate = function (event, data) {
      _lodash2.default.invoke(_this.props, 'onChange', event, _extends({}, _this.props, { value: data.value }));
    };

    _this.onHourClick = function (event, data) {
      (0, _lib.tick)(function () {
        var newValue = parseTime(data.value);

        _this.setState(function () {
          _this.onTimeUpdate(event, { value: newValue });
          return {
            mode: 'minute'
          };
        });
      });
    };

    _this.onMinuteClick = function (event, data) {
      var newValue = parseTime(_this.props.value, 'HH') + ':' + data.value;
      _this.setState(function () {
        _this.onTimeUpdate(event, { value: newValue });
        return {
          mode: 'minute'
        };
      });
    };

    _this.state = {
      mode: 'hour'
    };
    return _this;
  }

  _createClass(TimeInput, [{
    key: 'getPicker',
    value: function getPicker() {
      var _ref = [parseTime(this.props.value, 'HH'), parseTime(this.props.value, 'mm')],
          activeHour = _ref[0],
          activeMinute = _ref[1];

      return _react2.default.createElement(
        _semanticUiReact.Table,
        {
          unstackable: true,
          celled: true,
          textAlign: 'center' },
        _react2.default.createElement(_components.TimePickerComponent, {
          mode: this.state.mode,
          activeHour: activeHour,
          activeMinute: activeMinute,
          onHourClick: this.onHourClick,
          onMinuteClick: this.onMinuteClick })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          icon = _props.icon,
          popupPosition = _props.popupPosition,
          inline = _props.inline,
          value = _props.value;

      var rest = (0, _lib.getUnhandledProps)(TimeInput, this.props);

      var inputElement = _react2.default.createElement(_semanticUiReact.Input, _extends({}, rest, {
        value: value,
        icon: icon,
        onChange: onChange }));
      if (inline) {
        return this.getPicker();
      }
      return _react2.default.createElement(
        _2.CustomPopup,
        {
          onClose: this.onPopupClose,
          position: popupPosition,
          trigger: inputElement },
        this.getPicker()
      );
    }
  }]);

  return TimeInput;
}(_react2.default.Component);

TimeInput.META = {
  type: _COMPONENT_TYPES.TIME_INPUT,
  name: 'TimeInput'
};
TimeInput.handledProps = ['icon', 'inline', 'onChange', 'popupPosition', 'value'];


TimeInput.propTypes = {
  /** Called on change.
   * @param {SyntheticEvent} event React's original SyntheticEvent.
   * @param {object} data All props and proposed value.
  */
  onChange: _propTypes2.default.func,
  /** Same as semantic-ui-react Input's ``icon`` prop. */
  icon: _propTypes2.default.any,
  popupPosition: _customPropTypes.CustomPropTypes.popupPosition,
  inline: _propTypes2.default.bool,
  value: _propTypes2.default.string
};

TimeInput.defaultProps = {
  icon: 'time',
  inline: false,
  value: ''
};

exports.default = TimeInput;
exports.TimeInput = TimeInput;