/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/7jcU2/
 * リスト5: 匿名関数でスコープ作成した例(リスト4を利用)
 */

var message = "global scope";
function func() {
  assert("funcの中ではグローバルスコープの値が見える。", "global scope", message);
  (function () {
    var message = "local scope";
    assert("無名関数のスコープになる。", "local scope", message);
  }());
}
func();
assert("funcの外では当然グローバルスコープの値が見える。", "global scope", message);

