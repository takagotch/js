/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/JXarb/
 * リスト1: iframeを表示する側のコード
 */

$(function() {
  var win = document.getElementById("iframe").contentWindow;
  $("#form").on("submit", function() {
    // javascript150.bitbucket.org のiframeに対してメッセージを送信
    win.postMessage($("#msg").val(), "http://javascript150.bitbucket.org");
    return false;
  });
});
