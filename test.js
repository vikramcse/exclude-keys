var expect = require('chai').expect;
var exclude = require('./index.js');
var obj = {name: 'moe', age: 50, userid: 'moe1'};

describe('tests for excluding properties from object', function () {
  it('should return object without userid property', function () {
    expect(exclude(obj, ['userid'])).to.deep.equal({ name: 'moe', age: 50 });
  });
  
  it('should return object without userid property', function () {
    expect(exclude(obj, 'userid')).to.deep.equal({ name: 'moe', age: 50 });
  });
  
  it('should return object without userid and name property', function () {
    expect(exclude(obj, ['userid', 'name'])).to.deep.equal({ age: 50 });
  });

});