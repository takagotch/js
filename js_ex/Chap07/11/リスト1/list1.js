/**
 * author: JSサポーターズ
 * リスト1: 比較関数の例
 */

function comparefunc(lhs, rhs) {
  if (/*lhsがrhsより小さい場合*/) {
    return -1; // 負の値を返す。
  }
  if (/*lhsがrhsより大きい場合*/) {
    return 1; // 正の値を返す。
  }
  // lhsとrhsが等しい
  return 0; // 等しい場合は必ず0を返す。
}

