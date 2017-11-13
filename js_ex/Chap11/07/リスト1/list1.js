/**
 * author: JSサポーターズ
 * リスト1: アコーディオンリストのJavaScriptコード
 */

$(function() {
  $('dl.accordion dt').click(function() {
    $(this).next().slideToggle();
  }).next().hide();
});

