# exclude-keys
Return a copy of the object excluding the blacklisted properties

## Install

```sh
$ npm install --save exclude-keys
```

## Example

```js
var exclude = require('exclude-keys');

var obj = {name: 'moe', age: 50, userid: 'moe1'};
console.log(exclude(obj, 'userid'));
// -> { name: 'moe', age: 50 }

var obj = {name: 'moe', age: 50, userid: 'moe1'};
console.log(exclude(obj, ['userid', 'name']));
// -> { age: 50 }
```

#### `require('exclude-keys')(object, list)`

**Arguments**:
- `object`: Object
- `list`: list of items to exclude from object

**Returns**: Return a copy of the object excluding the blacklisted properties

## License

&copy; 2016 vikram. MIT License