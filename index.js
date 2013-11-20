module.exports = furkotTrip;


/*global window, document */

function furkotTrip() {
  var form, stops;

  function plan(data) {
    if (!form) {
      form = createForm();
    }
    stops.value = JSON.stringify(data);
    return form.submit();
  }

  function target() {
    var hidden = window.locationbar && !window.locationbar.visible;
    return hidden ? '_blank' : '_top';
  }

  function createForm() {
    var form = document.createElement('form');
    form.style.display = 'none';
    form.action = 'https://trips.furkot.com/trip';
    form.method = 'post';
    form.target = target();
    stops = document.createElement('input');
    stops.name = 'stops';
    form.appendChild(stops);
    // Firefox needs form in DOM
    document.body.appendChild(form);
    return form;
  }

  return {
    plan: plan
  };
}
