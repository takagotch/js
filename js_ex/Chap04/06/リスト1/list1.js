/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/BuRCA/
 * リスト1: 関数スコープの例
 */

function func() {
  var message = "func scope";
  assert("関数スコープ内では見える", "func scope", message);
}
assert("グローバルスコープからは見えない", typeof message, "undefined");
func();

