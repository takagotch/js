/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/xLRkS/
 * リスト3: リスト3: 〈リスト2〉を用いた関数オーバーロード
 */

function createMethod(obj, methodName, fn) {

  var oldMethod = obj[methodName]; // 同名の関数をあらかじめ取得

  obj[methodName] = function() {
    if (fn.length == arguments.length) {
      // 関数定義時の引数の個数と呼び出し時の引数の個数が等しければ呼び出し
      return fn.apply(this, arguments);
    } else if (typeof oldMethod == 'function') {
      // 予め取得しておいたものが関数ならば呼び出し
      // oldMethodはこの関数内で束縛されている。
      return oldMethod.apply(this, arguments);
    }
  };
}

// x の n乗根を求める
createMethod(this, "nthRoot", function(x, n) {
  return Math.pow(x, 1 / n);
});
// n を省略した場合は x の 2乗根を求める
createMethod(this, "nthRoot", function(x) {
  return Math.pow(x, 1 / 2);
});

assert("2の2乗根が得られる", 1.4142135623730951, nthRoot(2));
assert("8の3乗根(2)が得られる", 2, nthRoot(8, 3));

