/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/65Gze/
 * リスト3: JavaScriptのみで簡易sprintfの実装例
 */

var sprintf = function(string) {
  if (arguments.length < 2) {
    return string;
  }
  for (var i = 1; i < arguments.length; i++) {
    string = string.replace(/%s/, arguments[i]);
  }
  return string;
}

var str = sprintf("%s %s %s!", "Hello", "JavaScript", "World");
assert("Hello JavaScript World!", "Hello JavaScript World!", str);

