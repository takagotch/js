/** author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/WvKrx/
 * リスト1: 匿名関数その場実行をする
 */

(function(){
  var example = "example";
  assert("関数内では変数exampleが定義されている", typeof example, "string");
}());
assert("グローバルスコープでは変数exampleが定義されていない", typeof example, "undefined");

