/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/q7xgE/
 * リスト4: IE 6、7での名前付き関数定義の動作確認
 */

var fn = function self() {
  assert("fnと関数の別名fnは同じ", fn, self);
  assert("fnとarguments.calleeは同じ", fn, arguments.callee);
  assert("関数に別名をつけることで参照できるが、arguments.calleeでも同じように参照できる", self, arguments.callee);
};
fn();

