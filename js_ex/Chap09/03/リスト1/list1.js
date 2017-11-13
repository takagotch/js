/**
 * author: JSサポーターズ
 * リスト1: セレクターAPIを利用してDOM要素を取得する例
 */

// 比較用DOM要素
var child1 = document.getElementById("child1");
var child2 = document.getElementById("child2");

// body以下のid="parent"の要素の子孫のclass="children"の始めの要素を取得する
var elem1 = document.body.querySelector("#parent .children");
assert("querySelector(#parent .children)", elem1 === child1, true);

// body以下のid="parent"の要素の子孫のclass="children"を全て取得する
var nodeList1 = document.body.querySelectorAll("#parent .children");
assert("querySelectorAll(#parent .children)", nodeList1.length, 3);

// body以下のname属性が特定の文字列の要素のうち初めの要素を取得する
var elem2 = document.body.querySelector("[name='bar']");
assert("querySelector([name='bar'])", elem2 === child2, true);

// body以下のname属性が特定の文字列の全ての要素を取得する
var nodeList2 = document.body.querySelectorAll("[name='bar']");
assert("querySelectorAll([name='bar'])", nodeList2.length, 1);

