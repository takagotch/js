/**
 * author: JSサポーターズ
 * リスト6: Functionコンストラクタで関数定義
 */

var add = new Function("x", "y", "return x + y");
assert("Functionコンストラクタで関数定義", add(1, 2), 3);

