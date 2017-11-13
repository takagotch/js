/**
 * author: JSサポーターズ
 * リスト3: reduceによる関数を引数に取る高階関数の例
 */

function reduce(func, arr) {
  var result = null;
  var len = arr.length;
  var i;
  for (i = 0; i < len; i++) {
    result = func(result, arr[i]);
  }
  return result;
}
function add(x, y) {
  return x + y;
}
assert("配列の全ての要素を足す", reduce(add, [1, 2, 3]), 6);

