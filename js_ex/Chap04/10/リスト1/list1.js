/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/YhG3w/
 * リスト1: C++風に関数オーバーロードを実現しようとして失敗する例
 */

// x の n乗根を求める
function nthRoot(x, n) {
  return Math.pow(x, 1 / n);
}
// n を省略した場合は x の 2乗根を求める
function nthRoot(x) {
  return Math.pow(x, 1 / 2);
}
assert("2の2乗根が得られる", 1.4142135623730951, nthRoot(2));
assert("8の3乗根(2)が得られるはずだが2乗根になってしまう", 2, nthRoot(8, 3));

