/**
 * author: JSサポーターズ
 * リスト3: asyncTestを使ったテスト
 */

asyncTest("setTimeout", function() {
  setTimeout(function () {
    start();
    ok(true);
  }, 1000);
});

