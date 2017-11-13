/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/FwTBN/
 * リスト1: プロファイル対象のソースコード
 */

function fib(i) {
  if (i === 0 || i === 1) {
    return i;
  }
  return fib(i-1) + fib(i-2);
}
log(fib(40));

