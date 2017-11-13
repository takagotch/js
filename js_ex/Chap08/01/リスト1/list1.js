/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/9gLCH/
 * リスト1: シンプルな時間計測
 */

/**
* 文字列を連結して返す
*/
function strAdd(str) {
  return str + ".";
}

// 処理前時刻
var preTime = (new Date()).getTime();
// 10000回処理を繰り返す
var i = 0,
l = 100000,
str = "";
for (; i < l; i++) {
  str = strAdd(str);
}
// 処理後時刻
var postTime = (new Date()).getTime();
// 経過時間
var elapsed = postTime - preTime;
log("elapsed = " + elapsed + " ms");

