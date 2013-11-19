module.exports = furkotTrip;


/*global window, document */

function furkotTrip() {
  var form, stops;

  function plan(data) {
    stops.value = JSON.stringify(data);
    return form.submit();
  }

  function target() {
    var hidden = window.locationbar && !window.locationbar.visible;
    return hidden ? '_blank' : '_top';
  }

  form = document.createElement('form');
  form.action = 'https://trips.furkot.com/trip';
  form.method = 'post';
  form.target = target();
  stops = document.createElement('input');
  stops.name = 'stops';
  form.appendChild(stops);

  return {
    plan: plan
  };
}
