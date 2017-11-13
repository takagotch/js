/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/95fMZ/
 * リスト2: scriptタグでのスクリプト片実行
 */

var snippet = "log('from snippet');";

$("<script>")
  .attr("type", "text/javascript")
  .text(snippet)
  .appendTo($("head"));

