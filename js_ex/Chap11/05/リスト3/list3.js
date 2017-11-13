/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/7MTja/
 * リスト3: マーカーの配置
 */

var map = new GMaps({
  div: '#map',
  lat: 35.710021235043705,
  lng: 139.81069181318594,
  zoomControl : false,
  panControl : false,
  streetViewControl : false,
  mapTypeControl: false,
  overviewMapControl: false
});

// マーカーの追加
map.addMarker({
  lat: 35.710021235043705,
  lng: 139.81069181318594,
  title: 'Tokyo Skytree',
  click: function(e) {
    alert('You clicked in this marker');
  }
});

