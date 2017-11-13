/**
 * author: JSサポーターズ
 * リスト1: filterによる関数を引数に取る高階関数の例
 */

function filter(func, arr) {
  var result = [];
  var len = arr.length;
  var i;
  for (i = 0; i < len; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
function even(number) {
  return (number % 2) === 0;
}
function odd(number) {
  return (number % 2) === 1;
}
assert("偶数のみの配列を取得", filter(even, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]));
assert("奇数のみの配列を取得", filter(odd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]));

