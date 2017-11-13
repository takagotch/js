/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/SNNQM/
 * リスト3: filterを使って元配列のうち偶数の要素のみを抽出した配列を作る
 */

var array = [1,2,3,4,5];
var newArray = array.filter(function(element,index,array){
  return (element % 2 ===0);
});
assert("偶数の要素のみを抽出した配列", newArray, [2,4]);

