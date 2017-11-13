/**
 * author: JSサポーターズ
 * リスト3: throwを使ってforeachを途中で止める
 */

// Numberではない要素(null)を含む配列を準備
var array = [0, 1, null, 3];
try {
  array.forEach(function(n) {
    if (typeof n === "number") {
      // Numberオブジェクトでなければ例外を投げる
      throw false;
    }
  });
} catch (e) {
  log("throw");
}

