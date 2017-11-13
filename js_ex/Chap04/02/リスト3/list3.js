/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ZzgdU/
 * リスト3: argumentsオブジェクトを本物の配列に変換する
 */

function func(arg1, arg2 /* and more... */) {
  return Array.prototype.slice.apply(arguments);
}

assert("argumentsオブジェクトを配列に変換する", [1, 2, 3, 4], func(1, 2, 3, 4));

