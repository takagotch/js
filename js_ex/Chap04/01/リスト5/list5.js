/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/Jg4sW/
 * リスト5: IEでも動く書き方
 */

var fn = function() {
  var self = arguments.callee;
  assert("fnとselfは同じ", fn, self);
  assert("fnとarguments.calleeは同じ", fn, arguments.callee);
  assert("selfとarguments.calleeは同じ", self, arguments.callee);
};
fn();

