/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ATxAQ/
 * リスト1: encodeURIComponent / encodeURIの利用
 */

// エンコード前のテキスト
var plainText = "&=#";

// encodeURIComponentによるエンコードを行う
var encodedText = encodeURIComponent(plainText);
assert("encodeURIComponentでは '&=#' は '%26%3D%23' となる。", encodedText, '%26%3D%23');

// encodeURIによるエンコードを行う
var encodedText = encodeURI(plainText);
assert("encodeURIでは '&=#' は '&=#' のまま変化しない。", encodedText, '&=#');

