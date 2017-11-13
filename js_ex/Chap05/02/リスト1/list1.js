/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/PpXAJ/
 * リスト1: クロスブラウザでXMLHttpRequestを取得する方法
 */

function getXMLHttpRequest() {
  if (window.XMLHttpRequest) {
    // IE 7+, Firefox, Chrome, Safari, Opera...等のモダンブラウザ
    return new window.XMLHttpRequest();
  }
  else {
    try {
      // 現行で最新版のXMLHTTPとしてMicrosoftが推奨するバージョン。
      // IE 6以下、あるいはIE 7で特別にActiveXObjectを使いたい場合に利用。
      return new ActiveXObject("MSXML2.XMLHTTP.6.0");
    }
    catch (ex) {
      try {
        // フォールバック先としてMicrosoftが推奨するバージョン。
        return new ActiveXObject("MSXML2.XMLHTTP.3.0");
      }
      catch (e) {
        // 取得失敗。
        return null;
      }
    }
  }
}

