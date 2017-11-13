/**
 * author: JSサポーターズ
 * リスト5: Strictモードでのwith文
 */

(function () {
  "use strict";
  var obj = {};
  var x = 17;
  with (obj) {
    x;
  }
}());
// SyntaxError: Strict mode code may not include a with statement

