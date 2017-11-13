/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/EUWuH/
 * リスト4: オブジェクトのソート
 */

/**
* 配列をカンマ区切りの文字列に変換
*/
function arrayToString(ary) {
  return ary.join(",");
}

/**
* 名前と生誕年を持つHumanオブジェクト
*/
function Human(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}
Human.prototype.toString = function () {
  return this.name;
};

/**
* 生誕年で大小比較
*/
function compareBirthYear(lhs, rhs) {
  return lhs.birthYear > rhs.birthYear;
}
// 3人のHumanオブジェクト
var ary = [
  new Human("Guillaume", 1990), new Human("Odersky", 1958), new Human("Brendan", 1961)
];
assert("ソート前", "Guillaume,Odersky,Brendan", arrayToString(ary));

// 比較関数なし = toString(この例ではnameが返る)による辞書式ソート
ary.sort();
assert("比較関数なし", "Brendan,Guillaume,Odersky", arrayToString(ary));

// 比較関数あり = 生れた年が早い順
ary.sort(compareBirthYear);
assert("比較関数あり", "Odersky,Brendan,Guillaume", arrayToString(ary));

