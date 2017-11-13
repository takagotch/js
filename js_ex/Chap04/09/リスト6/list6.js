/**
 * author: JSサポーターズ
 * リスト6: IE 8以前で名前付き匿名関数で指定した名前が外部から参照できてしまう
 */

var bar;
var foo = function bar() {
  assert("内部からfoo関数が見える。", foo !== undefined && foo instanceof Function, true);
  assert("内部からbar関数が見える。", bar !== undefined && bar instanceof Function, true);
};
assert("foo関数が外部から見える。", foo !== undefined && foo instanceof Function, true);
assert("bar関数は外部からは見えてはいけない。", bar === undefined, true);
foo();

