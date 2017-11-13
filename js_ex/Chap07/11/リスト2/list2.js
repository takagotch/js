/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/5qZM4/
 * リスト2: 数値によるソート
 */

/**
* 配列をカンマ区切りの文字列に変換
*/
function arrayToString(ary) {
  return ary.join(",");
}
/**
* 要素を数値として大小比較
*/
function compareNumber(lhs, rhs) {
  return lhs - rhs;
}
// 0から14までの数値配列
var ary = [14,9,5,3,13,6,7,12,2,4,10,8,1,0,11];
assert("ソート前", "14,9,5,3,13,6,7,12,2,4,10,8,1,0,11", arrayToString(ary));

// 比較関数なし = 辞書式ソート
ary.sort();
assert("比較関数なし", "0,1,10,11,12,13,14,2,3,4,5,6,7,8,9", arrayToString(ary));

// 比較関数あり = 数値ソート
ary.sort(compareNumber);
assert("比較関数あり", "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14", arrayToString(ary));

