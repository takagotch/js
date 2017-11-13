/**
 * author: JSサポーターズ
 * リスト2: jQueryでセレクタ文字列を利用してDOM要素を取得する例
 */

// body以下のid="parent"の要素の子孫のclass="children"の始めの要素を取得する
var jqObj1 = jQuery("body #parent .children:first");
assert("jQuery(body #parent .children:first)", jqObj1.get(0) === child1, true);

// body以下のid="parent"の要素の子孫のclass="children"を全て取得する
var jqObj2 = jQuery("body #parent .children");
assert("jQuery(body #parent .children)", jqObj2.length, 3);

// body以下のname属性が特定の文字列の要素のうち初めの要素を取得する
var jqObj3 = jQuery("body [name='bar']:first");
assert("jQuery(body [name='bar']:first)", jqObj3.get(0) === child2, true);

// body以下のname属性が特定の文字列の全ての要素を取得する
var jqObj4 = jQuery("body [name='bar']");
assert("jQuery(body [name='bar'])", jqObj4.length, 1);

// body以下のname属性が特定の文字列以外の要素を取得する例(jQueryの拡張)
var jqObj5 = jQuery("body [name!='bar']");
assert("jQuery(body [name!='bar'])", jqObj5.length, 5);

// セレクターAPIで実行すると例外が発生する
// var nodeList = document.querySelectorAll("[name!='foo']");
