/**
 * author: JSサポーターズ
 * リスト5: オブジェクト内部の再帰関数
 */

var abacus = {
  sum: function sum(i) {
    return i > 0 ? i + sum(i - 1) : 0;
  }
};
assert("abacusオブジェクトのsumメソッドとして呼び出す。", abacus.sum(10), 55);
// calcuratorにabacusのsumの参照をコピー
var calcurator = { sum: abacus.sum };
// 元々のsumを消す。
var abacus = {};
assert("calcuratorオブジェクトのsumメソッドとしても呼び出せる。", calcurator.sum(10), 55);

