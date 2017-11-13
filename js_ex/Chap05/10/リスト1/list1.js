/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/vNYAg/
 * リスト1: scriptタグでの動的読み込み(jQueryを使用)
 */

var libAUrl = "http://javascript150.bitbucket.org/05-12/library/libA.js";

$("<script>")
  .attr("type", "text/javascript")
  .attr("src", libAUrl)
  .appendTo($("head"));

