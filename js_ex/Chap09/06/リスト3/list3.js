/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/changeclass-modifyrule
 * リスト3: class属性の書き換えによるスタイルの反映とルールの直接書き換えの速度比較(jQuery使用)
 */

// Test1. class属性の書き換え
$(".target").addClass("red");
$(".target").removeClass("red");

// Test2. ルールの書き換え
var style = document.getElementById("mystyle");
var styleSheet = style.sheet || style.styleSheet;
var rules = styleSheet.cssRules || styleSheet.rules;
var orig = rules[0].style.backgroundColor;
rules[0].style.backgroundColor = "blue";
rules[0].style.backgroundColor = orig;

