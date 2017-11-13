/**
 * author: JSサポーターズ
 * リスト2: mapによる関数を引数に取る高階関数の例
 */

function map(func, arr) {
  var result = [];
  var len = arr.length;
  var i;
  for (i = 0; i < len; i++) {
    result.push(func(arr[i]));
  }
  return result;
}
function double(x) {
  return x * x;
}
assert("配列の各要素を2乗した配列を作成", map(double, [1, 2, 3], [1, 4, 9]));

