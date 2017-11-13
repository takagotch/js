/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/qxZtb/
 * リスト3: argumentsから配列への変換
 */

function func () {
  var args = Array.prototype.slice.apply(arguments);
  assert("argargumentsはArrayではない", arguments instanceof Array, false);
  assert("argsはArrayオブジェクトのインスタンス", args instanceof Array, true);
}
func("foo", "bar", "baz");

