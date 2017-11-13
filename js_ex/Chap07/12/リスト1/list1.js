/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/aYV65/
 * リスト1: 配列のlengthプロパティの挙動
 */

var ary = ["a", "b", "c", "d"];
assert('ary.length == 4', ary.length, 4);
log(ary.join());
log("配列に要素を追加");
ary.push("e");
assert('ary.length == 5', ary.length, 5);
log(ary.join());
log("配列から要素を削除");
var elem = ary.shift();
assert('先頭要素は"a"', elem, "a");
assert('ary.length == 4', ary.length, 4);
log(ary.join());
log("配列のlengthプロパティを小さい値に変更");
ary.length = 2;
assert('ary.length == 2', ary.length, 2);
assert('ary.[2] == undefined', ary[3], undefined);
log(ary.join());
log("配列のlengthプロパティを大きい値に変更");
ary.length = 5;
assert('ary.length == 5', ary.length, 5);
log(ary.join());

