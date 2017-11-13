/**
 * author: JSサポーターズ
 * リスト3: 関数式で関数定義する際に、匿名関数に別名をつける
 */

var fib = function self(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else{
    return self(n-1) + self(n-2);
  }
};

