/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/3sGT8/
 * リスト8: 置換に関数を使う
 */

var str = 'ジュース100円、パン200円';
var result = str.replace(/(\d+)円/g, function(str, jpy, offset, s) {
  return parseInt(jpy, 10) * 0.012 + 'USD';
});
log(result);

