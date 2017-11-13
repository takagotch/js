/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/gXNUs/
 * リスト1: ContentEditable属性を利用した編集可能HTML
 */

// 変更を検知する
$("#editArea").on("focus", function () {
  $(this).data("beforeContent", $(this).text());
}).on("blur", function () {
  var before = $(this).data("beforeContent");
  var content = $(this).text();
  if (before != content) {
    log("[changed] " + content);
  }
});

