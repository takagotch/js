/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/Hjdk8/
 * リスト7: new Functionがスコープチェーンを辿れない例
 */

window.message1 = "global scope";
function func1() {
  var message2 = "func1 scope";
  function func2() {
    var message3 = "func2 scope";
    var func3 = new Function(
      'var message4 = "func3 scope";' +
        'assert("func3のスコープからはグローバルスコープの値が見える。", "global scope", message1);' +
        'assert("func3のスコープからはfunc1のスコープの値が見えない。", typeof message2, "undefined");' +
        'assert("func3のスコープからはfunc2のスコープの値が見えない。", typeof message3, "undefined");' +
        'assert("func3のスコープからはfunc3のスコープの値が見える。", "func3 scope", message4);'
    );
    func3();
  }
  func2();
}
func1();
assert("グローバルスコープからはグローバルスコープの値が見える。", "global scope", message1);
assert("グローバルスコープからはfunc1のスコープの値は見えない。", typeof message2, "undefined");
assert("グローバルスコープからはfunc2のスコープの値が見えない。", typeof message3, "undefined");
assert("グローバルスコープからはfunc3のスコープの値が見えない。", typeof message4, "undefined");

