/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/cKzHd/
 * リスト2: 文字列と数値の-演算子による演算
 */

var str1 = "1.2"; // 文字列の"1.2"
var str2 = "3.A"; // 文字列の"3.A"
var num1 = 4.5; // 数値の 4.5
var num2 = 6.7; // 数値の 6.7
assert("数値の -3.3", str1 - num1, -3.3);
assert("数値の NaN ", str2 - num1, NaN);
assert("数値の 3.3 ", num1 - str1, 3.3);
assert("数値の NaN ", num1 - str2, NaN);
assert("数値の -2.2", num1 - num2, -2.2);

