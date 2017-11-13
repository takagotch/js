/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/fnAps/
 */

/**
 * デバッグ出力用の関数
 */
function writeToScreen(outputString) {
  var output = document.getElementById("output");
  var pre = document.createElement("p");
  pre.innerHTML = outputString; // 出力する文字列をセット
  output.appendChild(pre); // idが"output"のタグに出力
}
writeToScreen("画面へ出力");

