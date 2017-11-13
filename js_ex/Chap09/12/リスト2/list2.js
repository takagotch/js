/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/55uBW/
 * リスト2: setTimeoutとrequestAnimationFrameの比較
 */

// 各種ベンダプレフィックを吸収
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

// requestAnimationFrameが有効かどうか
function hasRequestAnimationFrame() {
  return !!(window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame);
}

// 描画以外の処理
function update(data) {
  data.frames += 1;

  // fpsを更新
  var now = (new Date()).getTime();
  var elapsedSeconds = (now - data.startUnixTime) / 1000;
  data.fps = Math.floor(data.frames / elapsedSeconds);
}

// 描画処理
function render(data) {
  if (data.frames > 200) {
    return false;
  } else {
    var $target = $("#" + data.targetId);
    $target
    .find(".info")
    .html("frames = " + data.frames + "<br/>" +
    "fps = " + data.fps);
  $target.find(".progress div")
  .css("left", data.frames + "px");
  return true;
  }
}

// FPS計測用データ
function RenderSpecData(startUnixTime, targetId) {
  this.startUnixTime = startUnixTime;
  this.frames = 0;
  this.targetId = targetId;
  this.fps = 0;
}

// requestAnimationFrameでループ実行
function runAnimationFrameLoop(data) {
  function loop() {
    update(data);
    if (!render(data)) {
      return;
    }
    window.requestAnimFrame(loop);
  }
  loop();
}
// setTimeoutでループ実行
function runSetTimeoutLoop(data) {
  function loop() {
    update(data);
    if (!render(data)) {
      return;
    }
    setTimeout(loop, 1000 / 60);
  }
  loop();
}

$("#hasRequestAnimationFrame").html("requestAnimationFrame" + (hasRequestAnimationFrame() ? "使用可" : "使用不可"));
var now = (new Date()).getTime();
runAnimationFrameLoop(new RenderSpecData(now, "animFrame1"));
runAnimationFrameLoop(new RenderSpecData(now, "animFrame2"));
runAnimationFrameLoop(new RenderSpecData(now, "animFrame3"));
runSetTimeoutLoop(new RenderSpecData(now, "setTimeout1"));
runSetTimeoutLoop(new RenderSpecData(now, "setTimeout2"));
runSetTimeoutLoop(new RenderSpecData(now, "setTimeout3"));

