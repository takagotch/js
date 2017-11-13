/**
 * author: JSサポーターズ
 * リスト2: stop、startを使ったテスト
 */

test("setTimeout", function() {
  setTimeout(function () {
    start();
    ok(true);
  }, 1000);
  stop();
});

