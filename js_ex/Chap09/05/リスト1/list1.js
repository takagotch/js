/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/55aF9/
 * リスト1: マウスhoverの実装
 */

window.onload = function(){
  var testElement = document.getElementById('test');
  // マウスオーバーイベント
  appendEventListener(testElement, 'mouseover', function(){
    test.className="fuga";
  });
  // マウスアウトイベント
  appendEventListener(testElement, 'mouseout', function(){
    test.className="hoge";
  });
};

