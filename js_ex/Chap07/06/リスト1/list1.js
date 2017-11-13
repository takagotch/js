/**
 * author: JSサポーターズ
 * リスト1: エラー内容を呼び出し元に伝えるにはthrowを使う
 */

// 例外送出用関数
function f1(){
  throw "error:anything";
} function f2(){
  try{
    // 必ず例外が発生する
    f1();
  } catch(e){
    // 関数f1で起きた例外を受け取って表示
    log(e);
  }
}
// 実行
f2();

