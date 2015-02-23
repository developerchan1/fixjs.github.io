define(function () {
  'use strict';

  fix.test('var doc', {
    message: 'is a shared object which points to the global document object!',
    require: './var/doc'
  }).then(function (assert, doc) {

    assert.strictEqual(typeof doc, 'object', 'var/doc is an Object');

    assert.strictEqual(doc, global.document, 'var/doc is the global document object');

    assert.equal(Object.prototype.toString.call(doc), '[object HTMLDocument]', 'var/doc is a HTMLDocument');    
    
  });
});