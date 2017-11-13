/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/4ZtV3/
 * リスト3: 実行スコープの比較
 */

var snippet1 = "log('1: this === window: ' + (this === window));";
var snippet2 = "log('2: this === window: ' + (this === window));";

// evalでスコープがグローバルでは無い例
function SomeClass() {
}
SomeClass.prototype.foo = function () {
  eval(snippet1);
};
var some = new SomeClass();
some.foo();

// scriptタグによるグローバルスコープでの実行
$("<script>")
  .attr("type", "text/javascript")
  .text(snippet2)
  .appendTo($("head"));

