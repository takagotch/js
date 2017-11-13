/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ueEE5/
 * リスト3: 名前付き匿名関数による処理の細分化
 */

(function fib(i) {
  if (i === 0 || i === 1) {
    return i;
  }
  (function logging(){
    log("fib(" + (i-1) + ") + fib(" + (i-2) + ")");
  }());
  return fib(i-1) + fib(i-2);
}(20));

