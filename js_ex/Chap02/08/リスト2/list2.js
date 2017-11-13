/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ZemT4/
 * リスト2: 名前付き匿名関数を用いたプロファイル
 */

log((function fib(i) {
  if (i === 0 || i === 1) {
    return i;
  }
  return fib(i-1) + fib(i-2);
}(40)));

