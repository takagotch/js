/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/yYb94/
 * リスト1: 文字列と数値の+演算子による演算
 */

var str1 = "1.2"; // 文字列の"1.2"
var str2 = "3.A"; // 文字列の"3.A"
var num1 = 4.5; // 数値の 4.5
var num2 = 6.7; // 数値の 6.7
assert("文字列の「1.24.5」となってしまう。", str1 + num1, "1.24.5");
assert("文字列の「3.A4.5」となってしまう。", str2 + num1, "3.A4.5");
assert("文字列の「4.51.2」となってしまう。", num1 + str1, "4.51.2");
assert("文字列の「4.53.A」となってしまう。", num1 + str2, "4.53.A");
assert("数値の 11.2が得られる", num1 + num2, 11.2);

