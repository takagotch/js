/**
 * author: JSサポーターズ
 * リスト2: 関数呼び出しのための関数
 */

function createMethod(obj, methodName, fn) {

  var oldMethod = obj[methodName]; // 同名の関数をあらかじめ取得

  obj[methodName] = function(){
    if (fn.length === arguments.length) {
      // 関数定義時の引数の個数と呼び出し時の引数の個数が等しければ呼び出し
      return fn.apply(this, arguments);
    } else if (typeof oldMethod === 'function') {
      // あらかじめ取得しておいたものが関数ならば呼び出し
      // oldMethodはこの関数内で束縛されている。
      return oldMethod.apply( this, arguments );
    }
  };
}

