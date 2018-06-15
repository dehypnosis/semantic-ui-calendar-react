'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomPropTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var momentInstance = _propTypes2.default.instanceOf(_moment2.default);
var datesRange = _propTypes2.default.shape({
  start: momentInstance,
  end: momentInstance
});

var CustomPropTypes = exports.CustomPropTypes = {
  datesRange: datesRange,
  dateToShow: momentInstance,
  activeDate: momentInstance,
  popupPosition: _propTypes2.default.oneOf(['top left', 'top right', 'bottom left', 'bottom right', 'right center', 'left center', 'top center', 'bottom center']),
  yearsRange: _propTypes2.default.shape({
    start: _propTypes2.default.number,
    end: _propTypes2.default.number
  }),
  wrapperState: _propTypes2.default.shape({
    dateToShow: momentInstance,
    month: _propTypes2.default.string,
    year: _propTypes2.default.string,
    activeHour: _propTypes2.default.string,
    activeMinute: _propTypes2.default.string,
    mode: _propTypes2.default.string,
    datesRange: datesRange,
    activeDate: momentInstance,
    setDatesRange: _propTypes2.default.func,
    getDatesRange: _propTypes2.default.func,
    switchToPrevMode: _propTypes2.default.func,
    switchToNextMode: _propTypes2.default.func,
    showNextYear: _propTypes2.default.func,
    showPrevYear: _propTypes2.default.func,
    showNextMonth: _propTypes2.default.func,
    showPrevMonth: _propTypes2.default.func,
    showNextDay: _propTypes2.default.func,
    showPrevDay: _propTypes2.default.func,
    onDateClick: _propTypes2.default.func,
    onHourClick: _propTypes2.default.func,
    onMinuteClick: _propTypes2.default.func,
    onYearChange: _propTypes2.default.func,
    onMonthChange: _propTypes2.default.func,
    handleHeaderDateClick: _propTypes2.default.func,
    handleHeaderTimeClick: _propTypes2.default.func,
    onDateChange: _propTypes2.default.func,
    onTimeChange: _propTypes2.default.func,
    onDatesRangeChange: _propTypes2.default.func
  })
};

exports.default = CustomPropTypes;