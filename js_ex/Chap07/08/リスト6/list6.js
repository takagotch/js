/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/6ubRt/
 * リスト6: 正規表現のmatchにgを使う
 */

var str = '私は『詳説正規表現』と『孤独のグルメ』を買いました';
var books = str.match(/『(.*?)』/g);
if (books.length > 0) {
  log(books.join('、'));
}

