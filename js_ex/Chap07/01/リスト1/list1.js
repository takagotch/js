/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/wY3pN/
 * リスト1: forEachを使った配列の処理
 */

function logArrayElements(element, index, array) {
  log(index + ": " +  element);
}
var a = [2, 5, 9].forEach(logArrayElements);
assert("forEachの戻り値はない", typeof a, "undefined");

