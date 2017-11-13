/**
 * author: JSサポーターズ
 */

module('date', {
  setup: function() {
    //FakeTimer をセットアップ
    this.clock = sinon.useFakeTimers();
  },
  teardown: function() {
    this.clock.restore();
  }
});

test("test should animate element over 500ms", function(){
  // jQueryで要素を作成し、bodyに追加
  var el = jQuery("<div></div>");
  el.appendTo(document.body);

  // jQueryのanimateメソッドで500ミリ秒かけて幅高さを200pxにする
  el.animate({ height: "200px", width: "200px" }, 500);

  // 擬似的に510ミリ秒進める
  this.clock.tick(510);

  // 幅高さが期待どおり200pxになっているか確認
  equal("200px", el.css("height"));
  equal("200px", el.css("width"));
});

