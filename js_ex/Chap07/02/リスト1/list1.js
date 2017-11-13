/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/n7xHM/
 * リスト1: 各値でのtypeofの動作
 */

log("JavaScriptでの各型に対するtypeof の動作確認");
assert("typeof 1         === 'number'", typeof 1, "number");
assert("typeof NaN       === 'number'", typeof NaN, 'number');

assert("typeof 'Hello'   === 'string'", typeof "Hello", "string"); 

assert("typeof true      === 'boolean'", typeof true, 'boolean');
assert("typeof false     === 'boolean'", typeof false, 'boolean');

var func = function(){return 1;};
assert("typeof Fuction   === 'function'", typeof func, 'function');

assert("typeof null      === 'object'", typeof null, 'object');
log( Object.prototype.toString.call(null) );
assert("typeof undefined === 'undefined'", typeof undefined, 'undefined');

var obj = {a:'abc'};
assert("typeof Object    === 'object'", typeof obj, 'object');
log( Object.prototype.toString.call(obj) );

var array = [1, 2, 3];
assert("typeof Array     === 'object'", typeof array, 'object');
log( Object.prototype.toString.call(array) );

var re = new RegExp("DEF", "i");
assert("typeof RegExp    === 'object'", typeof re, 'object');
log( Object.prototype.toString.call(re) );

function MyClass(name){this.name = name;}
var myObj = new MyClass("test");
assert("typeof RegExp    === 'object'", typeof myObj, 'object');
log( Object.prototype.toString.call(myObj) );
log( myObj instanceof MyClass);
log( MyClass.prototype.isPrototypeOf(myObj));

