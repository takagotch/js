/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ZGq9u/
 * リスト1: 配列風オブジェクトに対して直接Arrayオブジェクトのメソッドを適用する
 */

var arrayLikeObj = { 0: "b", 1: "c", 2: "a", "length": 3 };

log("slice(指定範囲の配列のコピーを生成(非破壊的))");
var realArray = Array.prototype.slice.apply(arrayLikeObj);
assert("realArrayはArrayオブジェクト", realArray instanceof Array, true);
assert("realArray[0] == b", realArray[0], "b");
assert("realArray[1] == c", realArray[1], "c");
assert("realArray[2] == a", realArray[2], "a");

log("reverse(逆順に並び替え(破壊的))");
Array.prototype.reverse.apply(arrayLikeObj);
assert("arrayLikeObjはArrayオブジェクトではない", arrayLikeObj instanceof Array, false);
assert("arrayLikeObj[0] = a", arrayLikeObj[0], "a");
assert("arrayLikeObj[1] = c", arrayLikeObj[1], "c");
assert("arrayLikeObj[2] = b", arrayLikeObj[2], "b");

log("sort(辞書式昇順で並び替え(破壊的))");
Array.prototype.sort.apply(arrayLikeObj);
assert("arrayLikeObjはArrayオブジェクトではない", arrayLikeObj instanceof Array, false);
assert("arrayLikeObj[0] = a", arrayLikeObj[0], "a");
assert("arrayLikeObj[1] = b", arrayLikeObj[1], "b");
assert("arrayLikeObj[2] = c", arrayLikeObj[2], "c");

