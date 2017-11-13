/**
 * author: JSサポーターズ
 * リスト3: すでに存在しなくなった関数への参照を使った再帰関数(〈リスト2〉を利用)
 */

var abacus = {
  sum: function (i) {
    return i > 0 ? i + abacus.sum(i - 1) : 0;
  }
};
// calcuratorにabacusのsumの参照をコピー
var calcurator = { sum: abacus.sum };
// 元々のsumを消す。
var abacus = {};
try {
  assert("コピー元が無くても大丈夫？", calcurator.sum(10), 55);
} catch(e) {
  assert("コピー元が無くなると失敗する。", false, true);
}

