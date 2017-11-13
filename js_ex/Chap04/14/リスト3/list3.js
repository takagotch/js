/**
 * author: JSサポーターズ
 * リスト3: ECMA-262 5th エディションでのundefinedの上書き禁止属性
 */

(function(){
  var global = Function('return this')();
  global.undefined = "foo";
  assert("type global.undefined === 'undefined'", typeof global.undefined, "undefined");
}());
assert("type undefined === 'undefined'", typeof undefined, "undefined");

