/**
 * author: JSサポーターズ
 * リスト3: JSDeferredによる非同期処理
 */

Deferred.next(function() { // 非同期処理の実行
  alert('Hello');
  return Deferred.wait(1); // 1秒間後に次の非同期処理を実行する
}).next(function() {
  alert('World!');
});

