/**
 * author: JSサポーターズ
 * リスト2: spliceで配列中の要素を削除する
 */

var ary = ["a", "b", "c", "d"];
var removed = ary.splice(2, 1); // 添字2の要素から1つ削除する。
// ary => ["a", "b", "d"]
// removed => ["c"]

