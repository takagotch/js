/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/BrLyE/
 * リスト4: 数値を文字列として扱う場合
 */

var num1 = 4.5; // 数値の 4.5
assert("文字列の4.5", String(num1), "4.5");
assert("文字列の4.5", Number(num1).toString(), "4.5");
assert("文字列の4.5", (num1).toString(), "4.5");

