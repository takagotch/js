/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/Mhwuq/
 * リスト4: リスト1をjQueryなしで実装する例
 */

var libAUrl = "http://javascript150.bitbucket.org/05-12/library/libA.js";
var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", libAUrl);
document.getElementsByTagName("head")[0].appendChild(script);

