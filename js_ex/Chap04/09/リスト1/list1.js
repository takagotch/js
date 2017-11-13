/**
 * author: JSサポーターズ
 * リスト1: 単一な名前付き関数の再帰関数
 */

function sum(i) {
  return i > 0 ? i + sum(i - 1) : 0;
}
assert("1から10の合計は55", sum(10), 55);

