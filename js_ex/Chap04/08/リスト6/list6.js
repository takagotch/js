/**
 * author: JSサポーターズ
 * リスト6: デコレータ関数の例
 */

function decorator(func) {
  return function() {
    //対象の関数を呼び出す前に行う処理
    var result = func.apply(this, arguments);
    //対象の関数を呼び出した後に行う処理
    return result;
  };
}

