/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/QJxVe/
 * リスト1: スクロールメソッドの例
 */

var div5 = document.getElementById("div5");
$("#scroll1").on("click", function() {
  // 絶対座標での移動
  window.scrollTo(0, 100);
});
$("#scroll2").on("click", function() {
  // 現在位置からの相対座標での移動
  window.scrollBy(0, 40);
});
$("#scroll3").on("click", function() {
  // Elementが上端に来るように移動
  div5.scrollIntoView(true);
});
$("#scroll4").on("click", function() {
  // Elementが下端に来るように移動
  div5.scrollIntoView(false);
});

