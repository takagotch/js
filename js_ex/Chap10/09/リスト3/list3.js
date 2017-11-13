/**
 * author: JSサポーターズ
 * リスト3: 構造化されたデータの保存と読み込み
 */

// 保存時
var foo = {
  bar: 'hello',
  baz: 'world'
};
var fooJson = JSON.stringify(foo); // JSON文字列へシリアライズ
localStorage.foo = fooJson;

// 読み込み時
var fooJson = localStorage.foo;
var foo = JSON.parse(fooJson);
alert(foo.bar); // => 'hello'
alert(foo.baz); // => 'world'

