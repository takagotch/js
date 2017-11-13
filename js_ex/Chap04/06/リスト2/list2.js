/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/nzdEH/
 * リスト2: 関数内での変数の宣言
 */

function func1() {
  assert("関数スコープ内だけどまだ未定義", undefined, message);
  var message = "func scope";
  assert("関数スコープ内のここなら見える", "func scope", message);
}

// func1は実際にはfunc2のように書いたのと同様。
function func2() {
  var message;
  assert("関数スコープ内だけどまだ未定義", undefined, message);
  message = "func scope";
  assert("関数スコープ内のここなら見える", "func scope", message);
}
func1();
func2();

