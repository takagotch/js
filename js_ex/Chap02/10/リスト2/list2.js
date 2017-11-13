/**
 * author: JSサポーターズ
 * リスト2: jQuery.error()の利用方法
 */

// エラーをブラウザのconsoleに出力する例
jQuery.error = console.error;
// DOM要素への出力を行う例
jQuery.error = function(message) {
	$("#error").append(message).append("<br/>");
};

