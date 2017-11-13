/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/fRYLB/
 * リスト3: jQueryを使わず間引く方法
 */

var handle1 = function(ev) {
  output("plain", ev);
};
var handle2 = function(ev) {
  output("custom", ev);
};
function output(targetId, ev) {
  $("#" + targetId)
  .text("clientX: " + ("000" + ev.clientX).substr(-3) +
    ", clientY: " + ("000" + ev.clientY).substr(-3));
}
function createThrottleHandler(times, handle) {
  var calledCount = 0;
  function wrapper() {
    if (++calledCount % times === 0) {
      handle.apply(this, arguments);
      calledCount = 0;
    }
  }
  return wrapper;
}

$("#mouseArea").on("mousemove", handle1);
$("#mouseArea").on("mousemove", createThrottleHandler(10, handle2));

