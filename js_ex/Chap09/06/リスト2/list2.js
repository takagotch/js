/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/xBrYG/
 * リスト2: スタイルシートのルールの変更
 */

var style = document.getElementById("target_id");
var styleSheet = style.sheet;
var rules = styleSheet.cssRules || styleSheet.rules; // IE対応
rules[0].style.backgroundColor = "red"; // ルール変更

