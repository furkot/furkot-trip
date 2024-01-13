module.exports = furkotTrip;

const destination = 'https://trips.furkot.com/trip';

function furkotTrip() {
  let form;
  let stops;

  return {
    plan,
    getUrl
  };

  function plan(data) {
    if (!form) {
      form = createForm();
    }
    stops.value = JSON.stringify(data);
    return form.submit();
  }

  function getUrl(data) {
    if (data) {
      if (Array.isArray(data)) {
        data = data.map((stop, i) => toQuery(stop, `stops[${i}]`)).join('&');
      } else {
        data = toQuery(data, 'stop');
      }
      if (data) {
        data = `?${data}`;
      }
    }
    return destination + (data || '');
  }

  function toQuery(data, prefix) {
    return Object.keys(data).map(toParam, {
      data,
      prefix
    }).join('&');
  }

  function toParam(key) {
    const data = this.data;
    const prefix = `${this.prefix}[${key}]`;
    if (typeof data[key] === 'object') {
      return toQuery(data[key], prefix);
    }
    return [prefix, encodeURIComponent(data[key] || '')].join('=');
  }

  function target() {
    const hidden = window.locationbar && !window.locationbar.visible;
    return hidden ? '_blank' : '_top';
  }

  function createForm() {
    const form = document.createElement('form');
    form.style.display = 'none';
    form.action = destination;
    form.method = 'post';
    form.target = target();
    stops = document.createElement('input');
    stops.name = 'stops';
    form.appendChild(stops);
    // Firefox needs form in DOM
    document.body.appendChild(form);
    return form;
  }
}
