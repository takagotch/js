/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ewFRJ/
 * リスト2: jQuery.debounceを利用する例
 */

var handle1 = function(ev) {
  output("noDebounce", ev);
};
var handle2 = function(ev) {
  output("atLast", ev);
};
var handle3 = function(ev) {
  output("atBegin", ev);
};
function output(targetId, ev) {
  $("#" + targetId)
  .text("clientX: " + ("000" + ev.clientX).substr(-3) +
    ", clientY: " + ("000" + ev.clientY).substr(-3));
}
$("#mouseArea").on("mousemove", handle1);
$("#mouseArea").on("mousemove", $.debounce(200, handle2));
$("#mouseArea").on("mousemove", $.debounce(200, true, handle3));
$("#unbind").on("click", function() {
  $("#mouseArea").off("mousemove", handle2);
});

