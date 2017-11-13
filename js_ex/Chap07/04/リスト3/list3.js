/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/qYVz8/
 * リスト3: eval実行結果のスコープ
 */

assert("evalで変数定義しても結果は返されない", typeof eval("var t = 5;"), "undefined" );
assert("しかし、変数tが存在する", t, 5);
(function(){
  eval("var t = 6;");
  assert("evalした結果は現在のスコープでのみ有効", t, 6);
})();
assert("スコープ外では元の値のまま", t, 5);
