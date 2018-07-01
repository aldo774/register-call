function createMarkup(data) {
  return data.map(album =>
    `
      <div class="open-attendance">
        <span>${album.call_datetime}</span>
        <span></span>
        <a href="#">
          <span></span>
        </a>
      </div>      
    `).join('');
}

export default function renderAttendance(data, element) {
  const markup = createMarkup(data);
  const el = element;
  el.innerHTML = markup;
  return data;
}
