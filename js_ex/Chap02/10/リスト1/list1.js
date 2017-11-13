/**
 * author: JSサポーターズ
 * リスト1: window.onerrorを利用したエラーハンドリング
 */

window.onerror = function(message, url, lineNumber) {
	var txt = "There was an error on this page.\n\n";
	txt += "Error: " + message + "\n";
	txt += "URL: " + url + "\n";
	txt += "Line: " + lineNumber + "\n\n";
	log(txt);
};

