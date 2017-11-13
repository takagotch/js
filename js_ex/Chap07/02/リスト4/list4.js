/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/uHWVL/
 * リスト4: underscore.jsを使って型判別を行う
 */

assert("_.isNumber(1)         === true", _.isNumber(1), true);
assert("_.isNaN(NaN)          === true", _.isNaN(NaN), true);
assert("_.isString('Hello')   === true", _.isString("Hello"), true);
assert("_.isBoolean(true)     === true", _.isBoolean(true), true);
assert("_.isBoolean(false)    === true", _.isBoolean(false), true);

var func = function() {
  return 1;
};
assert("_.isFunction(func)    === true", _.isFunction(func), true);
assert("_.isNull(null)        === true", _.isNull(null), true);

var obj = {
  a: 'abc'
};
assert("_.isObject(obj)       === true", _.isObject(obj), true);

var array = [1, 2, 3];
assert("_.isArray(array)      === true", _.isArray(array), true);

var re = new RegExp("DEF", "i");
assert("_.isRegExp(re)        === true", _.isRegExp(re), true);

