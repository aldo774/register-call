'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAttendance;
function createMarkup(data) {
  return data.map(function (album) {
    return '\n      <div class="open-attendance">\n        <span>' + album.call_datetime + '</span>\n        <span></span>\n        <a href="#">\n          <span></span>\n        </a>\n      </div>      \n    ';
  }).join('');
}

function renderAttendance(data, element) {
  var markup = createMarkup(data);
  var el = element;
  el.innerHTML = markup;
  return data;
}