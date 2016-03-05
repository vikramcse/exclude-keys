var exclude = require('./index.js');
var obj = {name: 'moe', age: 50, userid: 'moe1'};
console.log(exclude(obj, 'userid'));