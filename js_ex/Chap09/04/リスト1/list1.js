/**
 * author: JSサポーターズ
 * リスト1: HTML文字列のエスケープ
 */

function escape(str) {
  return str.replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/&/g, "&amp;")
  .replace(/'/g, "&apos;")
  .replace(/"/g, "&quot;");
}

