/**
 * author: JSサポーターズ
 * リスト2: 部分適用を利用してCSV形式文字列から配列に変換する関数を作る
 */

// [,(カンマ)とその後の空白]で文字列をセパレート
String.prototype.csvToArray = String.prototype.split.partial(/,\s*/);
var result = "alpha, beta, gamma".csvToArray();
assert("CSV形式文字列から配列に変換", result, ["alpha", "beta", "gamma"]);

