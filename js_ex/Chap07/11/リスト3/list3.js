/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/Ye8J4/
 * リスト3: ファイル名が数字で始まっている場合のソート
 */

/**
* 配列をカンマ区切りの文字列に変換
*/
function arrayToString(ary) {
  return ary.join(",");
}

/**
* ファイル名として大小比較
*/
function compareFileName(lhs, rhs) {
  var lhsMatch = lhs.match(/^(\d+)?(.*)$/);
  var rhsMatch = rhs.match(/^(\d+)?(.*)$/);
  if (lhsMatch[1] && rhsMatch[1]) {
    // どちらも数値で始まっている場合は数値比較
    return parseInt(lhsMatch[1], 10) - parseInt(rhsMatch[1], 10);
  }

  // どちらかが数値で始まっていない場合は文字列の辞書式比較
  return lhs > rhs;
}
// 0から14までの数値配列
var ary = ["abc.txt", "1a.txt", "9c.txt", "9b.txt", "10a.txt"];
assert("ソート前", "abc.txt,1a.txt,9c.txt,9b.txt,10a.txt", arrayToString(ary));

// 比較関数なし = 辞書式ソート
ary.sort();
assert("比較関数なし", "10a.txt,1a.txt,9b.txt,9c.txt,abc.txt", arrayToString(ary));

// 比較関数あり = ファイル名としての比較
ary.sort(compareFileName);
assert("比較関数あり", "1a.txt,9b.txt,9c.txt,10a.txt,abc.txt", arrayToString(ary));

