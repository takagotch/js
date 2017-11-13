/**
 * author: JSサポーターズ
 * リスト4: JSDeferredによる非同期処理の制御
 */

// ループ実行
var array = ['hop', 'step', 'jump'];
  Deferred.loop(array.length, function(i) {
  alert(array[i]);
});
// 並列実行
Deferred.parallel([
  Deferred.wait(1).next(function() { alert('hop'); }),
  Deferred.wait(3).next(function() { alert('jump'); }),
  Deferred.wait(2).next(function() { alert('step'); })
]).next(function() {
  alert('complete'); // すべての並列実行が完了したら実行される
});

