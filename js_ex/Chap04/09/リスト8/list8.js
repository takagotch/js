/**
 * author: JSサポーターズ
 * リスト8: スタックフレームの深さ測定
 */

var callstackDepth = 0;
var timer = setTimeout(function () {
  assert("Stack: " + callstackDepth, callstackDepth > 0, true);
}, 1000);
try {
  function func( i ){
    callstackDepth = i;
    return func(++i);
  }
  func(1);
} catch(e) {
  clearTimeout(timer);
  assert("StackOverFlow: " + callstackDepth, false, true);
}

