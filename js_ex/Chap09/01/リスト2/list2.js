/**
 * author: JSサポーターズ
 * リスト2: DOM APIを利用したノードの追加とinnerHTMLを利用したノードの追加
 */

var result = document.getElementById("result");

// a. DOM APIを利用する方法
var div = document.createElement("div");
div.text = "This is HTMLDivElement.";
result.appendChild(div);

// b. innerHTMLを利用する方法
result.innerHTML = "<div>This is HTMLDivElement.</div>";

