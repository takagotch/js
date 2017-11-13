/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/68Kxt/
 * リスト1: 関数定義時の仮引数の個数と呼び出し時の実引数の個数
 */

function func (arg1, arg2) {
  assert("concatの仮引数は2個", 2, func.length);
  assert("concatの実引数は3個", 3, arguments.length);
}
assert("仮引数の個数には関数スコープ外からもアクセス可能", 2, func.length);

// 3個の実引数で呼び出す
func("foo", "bar", "baz");

