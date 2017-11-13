/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/vKMUR/
 * リスト3: 不要になった画像を破棄する
 */

var loadingImgUrl = "http://javascript150.bitbucket.org/05-09/loading.gif";
function ImageLoader() {
  this.imageUrls = {}; // 読み込み対象URL
}
ImageLoader.prototype.load = function(dom, url) {
  var self = this;
  if (typeof self.imageUrls[url] != "undefined" || dom.nodeName === "IMG") {
    return; // 既に読み込み処理をしていたらなにもしない
  }
  self.imageUrls[url] = false; // 読み込み済フラグOFF

  // まずローディング画像を表示
  var $dom = $(dom);
  var $image = $("<img>")
  .attr("src", loadingImgUrl)
  .attr("alt", $dom.attr("alt"))
  .css({
    width: $dom.width(),
    height: $dom.height()
  }).addClass("image");
  $dom.replaceWith($image);

  var cache = new Image(); // 新しくImageインスタンスを生成
  cache.onload = function() {
    $image.attr("src", url);
    self.imageUrls[url] = true; // 読み込み済フラグON
  }; // 読み込み完了時のハンドラを追加
  cache.src = url; // 画像URLを設定(ここで読み込みが始まる)
};
ImageLoader.prototype.purge = function(dom) {
  if (dom.nodeName === "IMG" && dom.src !== loadingImgUrl) {
    delete this.imageUrls[dom.src];
    // 空のdivを作成して元々のimgタグと置き換える
    if (dom.src.length > 0) {
      var $spacer = $("<div>")
      .attr("src", dom.src)
      .attr("alt", dom.alt)
      .css({
        width: dom.width,
        height: dom.height,
        display: "inline-block"
      }).addClass("image");
      $(dom).replaceWith($spacer);
    }
  }
};

$(function() {
  $("body").css({
    fontSize: "80%"
  }).append($("<div id='spec'>"));

  var loader = new ImageLoader();

  function checkImageDisplay() {
    // 表示領域
    var clientHeight = (window.innerHeight || document.documentElement.clientHeight);
    // スクロール量
    var scrollTop    = (document.body.scrollTop || document.documentElement.scrollTop);
    // 現在のスクロール位置から画面半分上
    var from = scrollTop - (clientHeight/2);
    // 現在のスクロール位置から画面半分下
    var to = scrollTop + clientHeight;
    // 各画像を読み込んだりパージしたり
    $(".image").each(function() {
      var $img = $(this);
      if(this.offsetTop < from || this.offsetTop > to) {
        // purge対象
        loader.purge(this);
      } else {
        // 読み込み対象
        loader.load(this, $(this).attr("src"));
      }
    });
  }
  // スクロールする度にチェックする
  $(window).bind("scroll", function () {
    checkImageDisplay();
  });
  checkImageDisplay();
});

