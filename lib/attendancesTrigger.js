'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attendancesTrigger;

var _registerCall = require('./registerCall');

var _registerCall2 = _interopRequireDefault(_registerCall);

var _attendances = require('./attendances');

var _attendances2 = _interopRequireDefault(_attendances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */

var listAttendances = document.getElementById('attendances');

function makeRequest() {
  _registerCall2.default.register.registers().then(function (data) {
    return (0, _attendances2.default)(data, listAttendances);
  });
}

function attendancesTrigger() {
  setInterval(makeRequest, 1000);
}