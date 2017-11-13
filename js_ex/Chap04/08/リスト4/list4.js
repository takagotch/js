/**
 * author: JSサポーターズ
 * リスト4: 関数を合成する関数
 */

function compose() {
  var args = arguments;
  return function(x) {
    var i = args.length - 1;
    for (i ; i >= 0; i--) {
      x = args[i](x);
    }
    return x;
  };
}
function f(x) {
  return x * x;
}
function g(x) {
  return x + 2;
}
var fg = compose(f, g);
var gf = compose(g, f);
assert("fg(3) === 25", fg(3), 25);
assert("gf(5) === 27", gf(5), 27);

