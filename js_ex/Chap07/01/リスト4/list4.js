/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/583CL/
 * リスト4: 左から右へ2次元配列を1次元配列に変換
 */

var array = [[0,1],[2,3],[4,5]];
var newArray = array.reduce(function(a, b) {
  return a.concat(b);
});
assert("1次元配列に変換", newArray, [0,1,2,3,4,5]);

