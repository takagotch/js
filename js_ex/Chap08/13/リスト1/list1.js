/**
 * author: JSサポーターズ
 * リスト1: DocumentFragmentを利用したシンプルな例
 */

var ul = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
li1.textContent = "li1";
li2.textContent = "li2";
ul.appendChild(li1);
ul.appendChild(li2);

var div = document.createElement("div");
div.textContent = "div";

var df = document.createDocumentFragment();
df.appendChild(ul);
df.appendChild(div);

document.body.appendChild(df); // ①

