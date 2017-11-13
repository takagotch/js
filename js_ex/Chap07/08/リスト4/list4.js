/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/exEux/
 * リスト4: 正規表現での文字列検索(「*」,「+」)
 */

var str = '私は『詳説正規表現』と『孤独のグルメ』を買いました';
var m = /『(.*)』/.exec(str);
if (m) {
  log(m[1]);
}

