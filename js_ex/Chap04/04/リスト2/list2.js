/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/XhtXZ/
 * リスト2: 仮引数で定義していない引数の取得
 */

function func (arg1, arg2) {
  assert("arg1はfoo", "foo", arg1);
  assert("arg2はbar", "bar", arg2);
  assert("arguments[0]はfoo", "foo", arguments[0]);
  assert("arguments[1]はbar", "bar", arguments[1]);
  assert("arguments[2]はbaz", "baz", arguments[2]);
}
func("foo", "bar", "baz");

