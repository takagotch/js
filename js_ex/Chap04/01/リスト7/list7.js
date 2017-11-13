/**
 * author: JSサポーターズ
 * リスト7: 関数宣言の確認
 */

function mul(x, y){
  return x*y;
}
assert("実行できる", mul(2,3), 6);

var minus = function(x, y){
  return (x - y);
};
assert("実行できない", typeof minus, "undefined");

