/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/Q4vSY/
 * リスト3: 配列のShallowコピー
 */

var ary1 = [{foo: 12}, 34];
var ary2 = ary1.slice(); // ary1をary2にコピー
// 正しくコピーできていることを確認
assert("ary1[0].foo == 12", ary1[0].foo, 12);
assert("ary2[0].foo == 12", ary2[0].foo, 12);
assert("ary1[1] == 34", ary1[1], 34);
assert("ary2[1] == 34", ary2[1], 34);
// ary1側の要素を書き換え
ary1[0].foo = 56;
ary1[1] = 78;
// オブジェクトへの変更はどちらにも反映している
assert("ary1[0].foo == 56", ary1[0].foo, 56);
assert("ary2[0].foo == 56", ary2[0].foo, 56);
assert("ary1[1] == 78", ary1[1], 78);
assert("ary2[1] == 34", ary2[1], 34);

