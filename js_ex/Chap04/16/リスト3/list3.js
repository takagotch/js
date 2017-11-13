/**
 * author: JSサポーターズ
 * jsPerf: http://jsperf.com/with-literal-performance
 * リスト3: with内でプロパティを追加した場合の動作
 */

var ninja = {
  hasShuriken: true,
  toss: function(){
    this.hasShuriken = !!this.hasShuriken;
  }
};
with ( ninja ) {
  hasShuriken = false;
  placed = function(){
    hasShuriken = false;
  };
}
assert("with内で定義したplacedプロパティはninjaオブジェクトには定義されていない" , typeof ninja.placed, 'undefined');
assert("placedはグローバル変数となります！", typeof placed,  'function');

