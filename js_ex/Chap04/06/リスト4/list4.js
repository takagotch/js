/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/225rz/
 * リスト4: グローバルで定義されている変数名と同名の変数を関数スコープで使用する例
 */

var message = "global scope";
function func() {
  assert("ここでグローバルのmessageが見れると思いきや見れない。", undefined, message);
  var message = "local scope";
  assert("関数スコープ内で定義した値が見える。", "local scope", message);
}
func();
assert("グローバルスコープではグローバルスコープの値。", "global scope", message);

