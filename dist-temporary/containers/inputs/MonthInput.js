'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _semanticUiReact = require('semantic-ui-react');

var _2 = require('..');

var _lib = require('../../lib');

var _COMPONENT_TYPES = require('../../lib/COMPONENT_TYPES.js');

var _components = require('../../components');

var _customPropTypes = require('../../lib/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthInput = function (_React$Component) {
  _inherits(MonthInput, _React$Component);

  function MonthInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthInput.__proto__ || Object.getPrototypeOf(MonthInput)).call.apply(_ref, [this].concat(args))), _this), _this.onMonthClick = function (event, data) {
      _this.setState({ activeMonth: data.value });
      _this.onMonthUpdate(event, data);
    }, _this.onMonthUpdate = function (event, data) {
      _lodash2.default.invoke(_this.props, 'onChange', event, _extends({}, _this.props, { value: data.value }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonthInput, [{
    key: 'getPicker',
    value: function getPicker() {
      return _react2.default.createElement(
        _semanticUiReact.Table,
        {
          unstackable: true,
          celled: true,
          textAlign: 'center' },
        _react2.default.createElement(_components.MonthPickerComponent, {
          onMonthClick: this.onMonthClick,
          activeMonth: this.props.value })
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


      var rest = (0, _lib.getUnhandledProps)(MonthInput, this.props);

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
          position: popupPosition,
          trigger: inputElement },
        this.getPicker()
      );
    }
  }]);

  return MonthInput;
}(_react2.default.Component);

MonthInput.META = {
  type: _COMPONENT_TYPES.MONTH_INPUT,
  name: 'MonthInput'
};
MonthInput.handledProps = ['icon', 'inline', 'onChange', 'popupPosition', 'value'];


MonthInput.propTypes = {
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

MonthInput.defaultProps = {
  icon: 'calendar',
  inline: false,
  value: ''
};

exports.default = MonthInput;
exports.MonthInput = MonthInput;