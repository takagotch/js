/**
 *lauthor: JSサポーターズ
 * リスト1: with文の例
 */

with ( Math ) {
  assert("Mathオブジェクトのメソッドを呼び出し", ceil(1,5), 1);
  assert("PiはMath.Piと同じ意味", Pi, Math.Pi);
};
assert("with文のブロック外ではundefined", typeof ceil(1,5), "undefined");

