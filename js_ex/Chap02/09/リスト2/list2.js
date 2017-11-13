/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/mdHf5/
 * リスト2: フィボナッチ数を求める関数の計算結果をキャッシュする
 */

function fib(i) {
  if (i === 0 || i === 1) {
    return i;
  }
  return fib(i - 1) + fib(i - 2);
}

// キャッシュ機構無しでのフィボナッチ数計算
var start = new Date();
var answer = fib(42);
var end = new Date();
log("[キャッシュ機構無し]: 答え = [" + answer + "], 経過時間(ms) = [" + (end - start) + "]");

function cacheWrap(self, func) {
  var orgFunc = func;
  var cache = {};
  return function() {
    var args = Array.prototype.join.apply(arguments, [","]);
    // 同一引数での呼び出し結果があればキャッシュの値を返す
    if (cache[args]) {
      return cache[args];
    }
    cache[args] = orgFunc.apply(self, arguments);
    return cache[args];
  };
}
fib = cacheWrap(this, fib);

// キャッシュ機構有りでのフィボナッチ数計算
start = new Date();
answer = fib(42);
end = new Date();
log("[キャッシュ機構有り]: 答え = [" + answer + "], 経過時間(ms) = [" + (end - start) + "]");

