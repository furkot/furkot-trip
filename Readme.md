[![NPM version][npm-image]][npm-url]

# @furkot/trip

  Adds stops to [Furkot] - online trip planner.

## Installation

  Install with npm:

    $ npm install --save @furkot/trip

## API

### .plan(stops)

Redirects user to [Furkot] website and adds stops to an existing trip or a new trip. If user is not
logged in she will be asked to sign in before selecting a trip (or creating a new one).

`stops` is an `Array` of objects with `name`, `description`, `coordinates` (lat, lon), `url` and
`duration` (in milliseconds). Only `name` and `coordinates` are required.

```javascript
var furkotTrip = require('@furkot/trip');
var stops = [
  {
    name: 'Time Square',
    coordinates: {
      lat: 40.7577,
      lon: -73.9857
    }
  }, {
    name: 'Metropolitan Museum',
    coordinates: {
      lat: 40.7789,
      lon: -73.9637
    }
  }
];
var nyTrip = furkotTrip();

nyTrip.plan(stops);
```

### .getUrl(stops)

Returns URL to [Furkot] with stops encoded in the query part. The URL will redirect user to [Furkot] and add stops to an existing trip or a new trip.

See how it works with [Liftie].

## License

  MIT

[Furkot]: https://trips.furkot.com
[Liftie]: http://liftie.info

[npm-image]: https://img.shields.io/npm/v/@furkot/trip
[npm-url]: https://npmjs.org/package/@furkot/trip
