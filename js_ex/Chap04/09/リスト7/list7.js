/**
 * author: JSサポーターズ
 * リスト7: IE 8以前の名前付き匿名関数の不具合の回避
 */

var bar;
var foo = (function(){
  function bar() {
    assert("内部からfoo関数が見える。", foo !== undefined && foo instanceof Function, true);
    assert("内部からbar関数が見える。", bar !== undefined && bar instanceof Function, true);
  }
  return bar;
}());
assert("foo関数が外部から見える。", foo !== undefined && foo instanceof Function, true);
assert("bar関数は外部からは見えてはいけない。", bar === undefined, true);
foo();

