/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/yqru6/
 * リスト2: 配列の要素の最大値/最小値を求める
 */

var ary = [1, 9, 6, 3, 8, 7, 4, 0, 2, 5];

// applyを用いた実装
assert("最大値を取得", 9, Math.max.apply(null, ary));
assert("最小値を取得", 0, Math.min.apply(null, ary));
