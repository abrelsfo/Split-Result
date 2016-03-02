## arrzip

> Merge N number of arrays by shortest or longest array

## Installation

```npm install arrzip```

## Usage
```js
var zip = require('../arrzip');

var a = [1,2,3,4];
var b = [6,7,8,9,0];
var c = [10,11,12,13,14,15];
var longest = zip(a,b,c,true);
var shortest = zip(a,b,c);

console.log(longest);
//=>[ [ 1, 6, 10 ], [ 2, 7, 11 ], [ 3, 8, 12 ], [ 4, 9, 13 ], [ 0, 14 ], [ 15 ] ]

console.log(shortest);
//=>[ [ 1, 6, 10 ], [ 2, 7, 11 ], [ 3, 8, 12 ], [ 4, 9, 13 ] ]
```

## API

### zip(\*arguments[, longest])

##### arguments
Type: Array
Condition: N number of arrays

##### longest
Type: Boolean<br>
true: zip based on longest Array<br>
false: zip based on shortest Array<br>
default: false

Merge N number of arrays by shortest or longest array

##License

MIT © [Alex Brelsford](abrelsfo.github.io)
