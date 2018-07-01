/* eslint-env browser */

import registerCall from './registerCall';
import renderAttendance from './attendances';

const listAttendances = document.getElementById('attendances');

function makeRequest() {
  registerCall.register.registers()
    .then(data => renderAttendance(data, listAttendances));
}

export default function attendancesTrigger() {
  setInterval(makeRequest, 1000);
}
