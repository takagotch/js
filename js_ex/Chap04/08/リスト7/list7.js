/**
 * author: JSサポーターズ
 * リスト7: デコレータ関数を実際に使う例
 */

//デコレータ関数
function mydecorator(func) {
  function _mydecorator() {
    console.log('JavaScript World begin.');
    var reuslt = func.apply(this, arguments);
    console.log('JavaScript World continue on today.');
  }
  return _mydecorator;
}
//デコレートする対象の関数を定義する。
function decorated() {
  console.log('Hello JavaScript World.');
}
//decoreted関数をmydecoratorでデコレートしdecorated変数に束縛する。
var decorated = mydecorator(decorated);
//デコレータされた関数を実行する。
decorated();
//'JavaScript World begin.'
//'Hello JavaScript World.'
//'JavaScript World continue on today.'

