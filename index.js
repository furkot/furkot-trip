module.exports = furkotTrip;


/*global document */

function furkotTrip() {
  var form, stops;

  function plan(data) {
    stops.value = JSON.stringify(data);
    return form.submit();
  }

  form = document.createElement('form');
  form.action = 'https://trips.furkot.com/trip';
  form.method = 'post';
  stops = document.createElement('input');
  stops.name = 'stops';
  form.appendChild(stops);

  return {
    plan: plan
  };
}
