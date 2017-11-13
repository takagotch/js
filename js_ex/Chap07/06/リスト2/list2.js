/**
 * author: JSサポーターズ
 * リスト2: try-catch-finallyの例
 */

var str = [
  'log(1 + 2)',
  'log(1 + )', // <= JavaScriptとして文法エラーなのでevalで例外が発生する
  'log(1 + 3)'];

var i = 0,
l = str.length;
while(i < l) {
  try {
    eval(str[i]);
  } catch(e) {
    // eval()で失敗した場合
    log("parse error");
  } finally {
    // finally句内の処理は必ず実行される
    i++;
  }
}

