# f1-parser

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Parse data from one object to another using a predefined function.

This is used in the module `f1` to parse and apply animation data to a dom element or another rendereable object (pixi, threejs, etc).

## Usage

[![NPM](https://nodei.co/npm/f1-parser.png)](https://www.npmjs.com/package/f1-parser)

### Example:
```javascript
var Parser = require( 'f1-parser' );

var parser = new Parser();
var out = {};

parser.teach( function( item, data ) {
  
  item.var1 = data.var1 + 1;
});

parser.parse( out, { var1: 33 } );

console.log( out.var1 ); // 34
```

## License

MIT, see [LICENSE.md](http://github.com/jam3/f1-parser/blob/master/LICENSE.md) for details.
