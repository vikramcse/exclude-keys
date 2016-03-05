'use strict';

module.exports = function (obj, exclude) {
  var keys = Object.keys(obj);
  var result = {};
  
  // if exclude is string
  if (typeof exclude === 'string') {
    exclude = new Array(exclude);
  }
  
  keys.forEach(function (k) {
    if (exclude.indexOf(k) === -1) {
      result[k] = obj[k];
    }
  });
  
  return result;
};