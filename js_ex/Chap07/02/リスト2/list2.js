/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/SNNQM/
 * リスト2: Object.prototype.toStringを使ってnull／配列の方判別を行う
 */

assert("Object.prototype.toString.call(null) === '[object Null]'", Object.prototype. toString.call(null), '[object Null]');
var array = [1, 2, 3];
assert("Object.prototype.toString.call(array) === '[object Array]'", Object. prototype.toString.call(array), '[object Array]');

