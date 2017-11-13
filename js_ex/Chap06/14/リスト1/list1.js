/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/8xHZs/
 * リスト1: TouchEventとGestureEventの例
 */

function displayTouchesInfo(ev) {
  var logMessages = [];
  logMessages.push("&lt;" + ev.type + "&gt; t.len = [" + ev.touches.length + "]");
  logMessages.push(", ct = [" + ev.changedTouches.length + "]");
  logMessages.push(", tt = [" + ev.targetTouches.length + "]<br/>");
  $.each(ev.touches, function(idx) {
    logMessages.push(
      "t[" + this.identifier + "]" +
        "(" + this.clientX + ", " + this.clientY + ")" +
        "(" + this.pageX + ", " + this.pageY + ")" +
        "(" + this.screenX + ", " + this.screenY + ")<br/>"
    );
  });
  $.each(ev.changedTouches, function(idx) {
    logMessages.push(
      "ct[" + this.identifier + "]" +
        "(" + this.clientX + ", " + this.clientY + ")" +
        "(" + this.pageX + ", " + this.pageY + ")" +
        "(" + this.screenX + ", " + this.screenY + ")<br/>"
    );
  });
  $.each(ev.targetTouches, function(idx) {
    logMessages.push(
      "tt[" + this.identifier + "]" +
        "(" + this.clientX + ", " + this.clientY + ")" +
        "(" + this.pageX + ", " + this.pageY + ")" +
        "(" + this.screenX + ", " + this.screenY + ")<br/>"
    );
  });
  log(logMessages.join(""));
}
function displayGestureInfo(ev) {
  log("&lt;" + ev.type + "&gt; scale = [" + ev.scale + "], rotate = [" + ev.rotation + "]");
}

// jQueryのイベントオブジェクトにHTML5のdataTrasferプロパティを手動で追加する
jQuery.event.props.push('touches');
jQuery.event.props.push('changedTouches');
jQuery.event.props.push('targetTouches');
jQuery.event.props.push('scale');
jQuery.event.props.push('rotation');

$("#gesture_area").on("touchstart", displayTouchesInfo);
$("#gesture_area").on("touchmove", displayTouchesInfo);
$("#gesture_area").on("touchend", displayTouchesInfo);
$("#gesture_area").on("touchcancel", displayTouchesInfo);
$("#gesture_area").on("gesturestart", displayGestureInfo);
$("#gesture_area").on("gesturechange", displayGestureInfo);
$("#gesture_area").on("gestureend", displayGestureInfo);

