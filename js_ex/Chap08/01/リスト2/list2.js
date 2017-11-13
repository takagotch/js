/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/YjU28/
 * リスト2: 速度計測処理を関数化した例（リスト1を利用）
 */

/**
* 文字列を連結して返す
*/
function strAdd(str) {
  return str + ".";
}

/**
* 関数を渡して処理時間を計測
* @param: func 計測対象の関数
* @param: times funcの実行回数
*/
function profileTime(func, times) {
  // 処理前時刻
  var preTime = (new Date()).getTime();
  // times回処理を繰り返す
  var i = 0;
  for (; i < times; i++) {
    func();
  }
  // 処理後時刻
  var postTime = (new Date()).getTime();
  // 経過時間
  return postTime - preTime;
}
// strAddは引数を必要とするので、引数を渡すためのプロキシ関数を作成

function createStrAddProxy(str) {
  return function() {
    str = strAdd(str);
  };
}
var elapsed = profileTime(createStrAddProxy(""), 100000);
log("elapsed = " + elapsed + " ms");

