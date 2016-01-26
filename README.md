# in_array

This is the Javascript implementation of the ```in_array``` php function. The function is originally made by the [php.js](http://phpjs.org) organization and its contributors.

## Instalation
With npm:
```
npm install --save in_array
```

With Bower:
```
bower install --save in_array
```

Or you can just [download a ZIP](https://github.com/brunoti/in_array/archive/master.zip).

## Setup

###### Node or Browserify
``` js
var in_array = require('in_array');
```

###### Browser (Global)
``` html
<script src="in_array.js"></script>
```

## Usage
``` js

in_array(item, arrayOrObject, useStrictMode);

console.log(in_array(1, ['1', '2', '3'])); // Returns: true
console.log(in_array(1, ['1', '2', '3'], true)); // Returns 'false' because the strict mode is on.
console.log(in_array(1, {key: 1})); // Returns: true

```

## License

MIT
