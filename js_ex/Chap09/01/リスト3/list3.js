/**
 * author: JSサポーターズ
 * リスト3: HTMLノードにTextノードを追加する
 */

var text = document.createTextNode("テキストの追加");
var result = document.getElementById("result");
result.appendChild(text);

