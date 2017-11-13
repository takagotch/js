/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/pUATH/
 * リスト1: スタイルシートを取得する二つの例
 */

// DocumentStyleインターフェースのstyleSheetsプロパティで取得する方法
var i = 0, l = document.styleSheets.length, styleSheet1;
for ( ; i<l; i++) {
  if (document.styleSheets[i].title == "target_title") {
    styleSheet1 = document.styleSheets[i];
    break;
  }
}

// LinkStyleインターフェースのsheetプロパティで取得する方法
var style = document.getElementById("target_id");
var styleSheet2 = style.sheet;

assert("取得できるオブジェクトは同じ", styleSheet1 === styleSheet2, true);

