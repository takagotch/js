/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/amJ9p/
* リスト2: リスト2 1msを指定したときのsetTimeoutの動作
*/

/**
* 指定した実行間隔で実際にかかる時間を計測
* count: 試行回数
* ms: 実行間隔
*/
function checkSetTimeoutDelay(count, ms) {
  // 開始時刻を追加
  var times = [new Date()];
  var id = setTimeout(function checkTimeout() {
    times.push(new Date());
    if(times.length <= count){
      // 自身を繰り返し呼び出し
      setTimeout(checkTimeout, ms);
    } else {
      var tl = times.length;
      // 総経過時間
      var total = 0;
      for(var i = 1; i < tl; i++) {
        // 各実行間隔を求める
        var t2 = times[i];
        var t1 = times[i-1];
        var n = (( t2.getTime() - t1.getTime()) + 1000) % 1000;
        total += n;
      }
      var average = total/count;
      log(average + " ms"); // 実行間隔(ミリ秒)の平均を出力
    }
  }, ms);
}

// 測定実行開始
setTimeout(function() {
  checkSetTimeoutDelay(200, 1);
}, 3000);

