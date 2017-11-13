/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/LScEp/
* リスト1: setTimeoutの簡単な使い方
*/

(function(){
  // 3秒(3000ミリ秒)後にログを出力
  setTimeout(function(){
    log("(1)"); // ①
  }, 3000);
  // 5秒(5000ミリ秒)後にログを出力
  var id = setTimeout(function(){
    log("(2)"); // ②
  }, 5000);
  // (2)をキャンセル
  clearTimeout(id);
  log("(3)");     // ③
})();

