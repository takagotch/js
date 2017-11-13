/**
 * author: JSサポーターズ
 */

module('datetime', {
  setup: function () {
    // FakeTimerのセットアップ
    this.clock = sinon.useFakeTimers();
  },
  teardown: function () {
    this.clock.restore();
  }
});

test("test should create fake time", function () {
  var now = new Date();
  equal(0, now.getTime());
});

test("test should pass time", function () {
  // 10ミリ秒進める
  this.clock.tick(10);
  var now = new Date();
  equal(10, now.getTime());
});
