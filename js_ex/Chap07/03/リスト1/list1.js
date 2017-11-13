/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/uXQEq/
 * リスト1: 数値から文字列、文字列から数値への変換
 */

var str = "1.23";
var badNumberString = "1.2Y";
var moreBadNumberString = "Hello";

log("文字列 => 数値");
assert("Number('1.23')      === 1.23", Number(str), 1.23);
assert("parseInt('1.23')    === 1", parseInt(str, 10), 1);
assert("parseFloat('1.23')  === 1.23", parseFloat(str), 1.23);

assert("Number('1.2Y')      is NaN", isNaN(Number(badNumberString)), true);
assert("parseInt('1.2Y')    === 1", parseInt(badNumberString, 10), 1);
assert("parseFloat('1.2Y')  === 1.2", parseFloat(badNumberString), 1.2);

assert("Number('Hello')     is NaN", isNaN(Number(moreBadNumberString)), true);
assert("parseInt('Hello')   is NaN", isNaN(parseInt(moreBadNumberString, 10)), true);
assert("parseFloat('Hello') is NaN", isNaN(parseFloat(moreBadNumberString)), true);

log("数値 => 文字列");
var num = 1.23;
assert("String(1.23)        === '1.23'", String(num), "1.23");
assert("(1.23).toString()   === '1.23'", num.toString(), "1.23");

