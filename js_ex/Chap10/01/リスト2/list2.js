/**
 * author: JSサポーターズ
 * リスト2: Array.isArrayを自前で実装する場合
 */

// Array.isArray に対応していない場合
if (!Array.isArray) {
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) == "[object Array]";
  };
}

// レガシーブラウザでも Array.isArray を利用可能
alert(Array.isArray([1, 2, 3]));  //-> true;
alert(Array.isArray({ foo:'bar' }));  //-> false;

