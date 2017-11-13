/**
* author: JSサポーターズ
* リスト3: アクセサプロパティの使用例
*/

// lenthプロパティと同等の機能を持つ、lenプロパティを定義
Object.defineProperty(Array.prototype, 'len', {
  get: function() {
    return this.length;
  },

  set: function(num) {
    if (typeof num !== 'number') {  //-> ① バリデーション
      throw new RangeError();
    }
    this.splice(num, this.length);  //-> ② 代入と同時に配列を操作
  },

  enumerable: false                 //-> ③ for-inで列挙されない
});


// 配列の宣言
var arr = [1, 2, 3, 4, 5];

// ① lenプロパティに有効な値以外を設定するとエラー
try {
  arr.len = 'foo';
} catch (e) {
  assert("e instanceof RangeError", true, e instanceof RangeError);
}

// ② lenプロパティへの代入に連動して配列長が変わる
arr.len = 3;
assert("arr === [1, 2, 3]", [1, 2, 3], arr);

// ③ lenプロパティはfor-inで列挙されない
for (var key in arr) {
  log('key: ' + key);  //-> "0", "1", "2"
}

