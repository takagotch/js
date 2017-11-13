/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/Q8jd6/
* リスト2: 一つのタイマーを用いたアニメーションコールバックの実行
*/

var Timer = {
  timerID: 0,
  callbacks: [],
  start: function() {
    if (this.timerID) { return; }
    var self = this;
    // 追加されたコールバックを処理する関数
    (function doProcess() {
      for (var i = 0; i < self.callbacks.length; i++) {
        // コールバックの戻り値がfalseならばリストから除外する
        if (self.callbacks[i]() === false) {
          self.callbacks.splice(i, 1);
          i--;
        }
      }
      self.timerId = setTimeout(doProcess, 10);
    }());
  },
  stop: function() {
    // 明示的にタイマーを停止
    clearTimeout(this.timerID);
    this.timerID = 0;
  },
  add: function(fn) {
    // アニメーションコールバックが追加されたらタイマー開始
    this.callbacks.push(fn);
    this.start();
  }
};

// アニメーションさせる要素
var target = document.getElementById("target"),
leftPos = 0,
topPos = 0;

// 横移動のアニメーションを追加
Timer.add(function() {
  target.style.left = (leftPos += 2) + "px";
  if (leftPos > 200) {
    return false;
  }
});
// 縦移動のアニメーションを追加
Timer.add(function() {
  target.style.top = (topPos++) + "px";
  if (topPos > 50) {
    return false;
  }
});

