/**
 * author: JSサポーターズ
 * リスト2: オブジェクト内部の再帰関数
 */

var abacus = {
  sum: function (i) {
    return i > 0 ? i + abacus.sum(i - 1) : 0;
  }
};
assert("オブジェクト内部でも大丈夫", abacus.sum(10), 55);

