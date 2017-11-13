/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/vHrbm/
 * リスト3: 正規表現での文字列検索(繰り返しを検索)
 */

var str = '私は『詳説正規表現』を買いました';
var m = /『(.*)』/.exec(str);
if (m) {
  log(m[1]);
}

