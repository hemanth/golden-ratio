# golden-ratio [![Build Status](https://travis-ci.org/hemanth/golden-ratio.svg?branch=master)](https://travis-ci.org/hemanth/golden-ratio)

> Golden ratio with a number.


## Install

```
$ npm install --save golden-ratio
```

## Usage

```js
const goldenRatio = require('golden-ratio');

goldenRatio({x:1}); //=> { y: 1.618, x: 1 }

goldenRatio({y:1}); //=> { x: 0.6180469715698392, y: 1 }

goldenRatio({x:'meow'}); //=> 'Error: Missing expected input'
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
