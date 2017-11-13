/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/xTNY2/
 * リスト3: 文字列を数値として扱う場合
 */

var str1 = "1.2"; // 文字列の"1.2"
var str2 = "3.A"; // 文字列の"3.A"
assert("数値の 1", parseInt(str1, 10), 1);
assert("数値の 1.2", parseFloat(str1), 1.2);
assert("数値の 1.2", Number(str1), 1.2);
assert("数値の 3", parseInt(str2, 10), 3);
assert("数値の 3", parseFloat(str2), 3);
assert("数値の NaN", Number(str2), NaN);

