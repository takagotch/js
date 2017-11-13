/**
 * author: JSサポーターズ
 * リスト3: window.onerror内でサーバへのエラー送信を行う例
 */

window.onerror = function(message, url, lineNumber) {
	var xhr = getXMLHttpRequest();
	var scriptUrl = "http://www.example.com/clientlog";
	var log = linenumber + message + url;
	xhr.open("POST", scriptUrl);
	xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	xhr.send(log);
	return false;
};

