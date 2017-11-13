/**
 * author: JSサポーターズ
 * リスト2: データプロパティの使用例
 */

var obj = {};

// obj.foo = 'bar' と等価なプロパティ定義
Object.defineProperty(obj, 'foo', {
  value: 'bar',       //-> 初期値
  writable: true,     //-> 書き込み可
  enumerable: true,   //-> for-inで列挙される
  configurable: true  //-> プロパティ属性の再定義可
});

// 挙動の確認
// 初期値
assert("obj.foo === 'bar'", 'bar', obj.foo);

// 書き込み可
obj.foo = 'baz';
assert('"baz" 書き込み後の値: ', 'baz', obj.foo);

// for-inで列挙される
for (var key in obj) {
  assert('for-inによる列挙: ', 'foo', key);
}

// プロパティ属性の再定義を不可に設定
Object.defineProperty(obj, 'foo', {
  // 書き込み不可に設定
  writable: false
});

// 再定義により書き込み不可に
obj.foo = 'update';
assert('"update" 書き込み後の値: ', 'baz', obj.foo);

