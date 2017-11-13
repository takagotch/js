/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/nmRAm/
 * リスト2: mapを使った配列の処理
 */

function twice(element){ return element * 2; }
var result = [1,2,3].map(twice);
assert("arraydaze ", Object.prototype.toString.call(result),"[object Array]");
assert("[2,4,6]",result ,[2,4,6]);

