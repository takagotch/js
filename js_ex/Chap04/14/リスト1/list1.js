/**
 * author: JSサポーターズ
 * リスト1: undefinedが信用できない例
 */

// どこかでundefinedに値が代入されている場合...
var undefined = true;

(function (arg) {
  // undefined自体と比較をする場合に予期せぬ挙動をしてしまいます。
  var arg = (arg === undefined) ? "default" : arg;
  // arg => "default" !!!
}(true));

