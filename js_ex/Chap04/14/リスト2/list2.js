/**
 * author: JSサポーターズ
 * リスト2: 色々なundefined値の取得方法
 */

// (1) 関数の仮引数になにも渡さずに取得する
var undef = (function(undefiend){ return undefiend; }());
// (2) 未定義値を使って取得する
var undef;
// (3) 要素数ゼロの配列の要素が無い添字を参照して取得する
var undef = [][0];
// (4) void演算子を使って取得する
var undef = void 0;

