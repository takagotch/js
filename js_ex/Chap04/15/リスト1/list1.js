/**
 * author: JSサポーターズ
 * リスト1: 関数オブジェクトにpartial関数を定義する
 */

Function.prototype.partial = function(){
  // 「partial関数を呼び出した関数」を代入
  var fn = this;
  // partial関数に渡された引数を代入
  var args = Array.prototype.slice.call(arguments);
  // 代入した関数、引数を実行する関数をreturn
  return function(){
    var arg = 0;
    for(var i=0, l = args.length; (i < l && arg < l); i++){
      // partal関数に渡されたときの引数が"undefined"
      // ならば、実行先の関数の引数で置き換え
      if(typeof args[i] === "undefined") {
        args[i] = arguments[arg++];
      }
    }
    // partial関数を呼び出した関数に引数を渡して実行
    return fn.apply(this, args);
  };
};

