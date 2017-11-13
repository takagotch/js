/**
 * author: JSサポーターズ
 * リスト2: 各種方法でDOMにノードを追加する
 */

function escape(str) {
  return str.replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/&/g, "&amp;")
  .replace(/'/g, "&apos;")
  .replace(/"/g, "&quot;");
}

var resultPlain = document.getElementById("resultPlain");
var resultEscape = document.getElementById("resultEscape");
var resultTextNode = document.getElementById("resultTextNode");
$("#xssInputPlain").on("change", function (){
  resultPlain.innerHTML = this.value;
});
$("#xssInputEscape").on("change", function (){
  resultEscape.innerHTML = escape(this.value);
});
$("#xssInputTextNode").on("change", function (){
  $(resultTextNode).empty();
  var textNode = document.createTextNode(this.value);
  resultTextNode.appendChild(textNode);
});
$("#xssInputJQuery").on("change", function (){
  $("#resultJQuery").text(this.value);
});

