/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/SYVds/
 * リスト5: 右から左へ2次元配列を1次元配列に変換
 */

var array = [[0,1],[2,3],[4,5]];
var newArray = array.reduceRight(function(a, b) {
  return a.concat(b);
});
assert("1次元配列に変換", newArray, [4,5,2,3,0,1]);

