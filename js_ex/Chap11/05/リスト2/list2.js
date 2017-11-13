/**
 * author: JSサポーターズ
 * リスト2: イベントの取得
 */

var map = new GMaps({
  div: '#map',
  lat: 35.710021235043705,
  lng: 139.81069181318594,
  zoomControl : false,
  panControl : false,
  streetViewControl : false,
  mapTypeControl: false,
  overviewMapControl: false,
  click: function(e) {
    alert('click'); // クリックイベント
  },
  dragend: function(e) {
    alert('dragend'); // ドラッグイベント
  }
});

