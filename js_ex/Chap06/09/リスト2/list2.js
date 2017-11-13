/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/7v2qe/
* リスト2: 重い処理を実行中にコールバック処理が呼ばれない例
*/

function log(message) {
  $("#result").append("<li>" + message + "</li>");
}
function callback() {
  log("コールバック:" + (new Date()).getTime());
}
// 1秒間隔で現在時刻を出力するコールバックを実行
log("インターバル開始");
var intervalId = setInterval(callback, 1000);

/**
* 5秒かかる処理を想定。
*/
function heavyProcess() {
  log("重い処理開始");
  var time = 5000;
  var now = (new Date()).getTime();
  var begin = now;
  while(now < begin + time) {
    now = (new Date()).getTime();
  }
  log("重い処理終了");
}
// 3秒後から重い処理を実行する。
setTimeout(heavyProcess, 3000);

// 10秒後にインターバル停止。
setTimeout(function() {
  clearInterval(intervalId);
  log("インターバル終了");
}, 10000);

