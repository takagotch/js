/**
 * author: JSサポーターズ
 * リスト2: 位置情報の連続取得
 * jsFiddle: http://jsfiddle.net/javascript150/mcvwz/
 */

// watchIdにwatchPosition()から返るIDを格納しておく
var watchId = navigator.geolocation.watchPosition(
  function(position) {
    // 精度が30を超えたとき
    if (position.coords.accuracy > 30) {
      alert('緯度:' + position.coords.latitude + ', 経度:' + position.coords.longitude);
      // 格納しておいたwatchIdを元に連続取得の解除をする
      navigator.geolocation.clearWatch(watchId);
    }
  },
  function() {
    alert('位置情報の取得に失敗しました。');
  }
);

