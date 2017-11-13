/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/a6baP/
* リスト3: コールバック関数に引数を渡す
*/

function log(message) {
  $("#result").append("<li>" + message + "</li>");
}
function callback(time) {
  log("コールバック: " + time);
}
setInterval(function(){
  callback((new Date()).getTime());
}, 1000);

