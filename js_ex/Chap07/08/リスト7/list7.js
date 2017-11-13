/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/wDdLP/
 * リスト7: 文字列置換の例
 */

var re = /(\w+)\s(\w+)\s(\w+)/g;
var str = "Japan Tokyo Adachi";
var newStr = str.replace(re, "$3,$2,$1");
assert("文字列の置換", newStr, "Adachi,Tokyo,Japan");

