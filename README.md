# in_array
[![Build Status](https://travis-ci.org/brunoti/in_array.svg?branch=master)](https://travis-ci.org/brunoti/in_array)
[![Coverage Status](https://coveralls.io/repos/github/brunoti/in_array/badge.svg)](https://coveralls.io/github/brunoti/in_array)
[![Made with vim](https://img.shields.io/badge/made_with-vim-brightgreen.svg?style=flat)](http://www.vim.org/)

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
