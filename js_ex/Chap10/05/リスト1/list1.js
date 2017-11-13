/**
 * author: JSサポーターズ
 * リスト1: 位置情報の単一取得
 * jsFiddle: http://jsfiddle.net/javascript150/cTdsN/
 */

navigator.geolocation.getCurrentPosition(
  function(position) {
    alert('緯度:' + position.coords.latitude + ', 経度:' + position.coords.longitude);
  },
  function() {
    alert('位置情報の取得に失敗しました。');
  },
  {
    timeout: 10
  }
);

