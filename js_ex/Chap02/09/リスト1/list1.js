/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/CV8Ys/
 * リスト1: ある関数に対して、渡された引数と返す値をロギングする例
 */

function funcA(argA, argB, argC) {
  /* 関数本体の処理 */
  return "argA = " + argA + ", argB = " + argB + ", argC = " + argC;
}

function loggingWrap(self, func) {
  var orgFunc = func;
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      log(i + " = " + arguments[i]);
    }
    var result = orgFunc.apply(self, arguments);
    log("result = [" + result + "]");
    return result;
  };
}
log("funcAをそのまま呼び出し");
log(funcA("aaa", "bbb", "ccc"));
log("ロギング用にラップした関数で上書きし、funcAをラッパー経由で呼び出し");
funcA = loggingWrap(this, funcA);
log(funcA("aaa", "bbb", "ccc"));

