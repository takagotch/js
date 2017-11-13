/**
 * author: JSサポーターズ
 */

/**
 * StringBufferオブジェクトを作成する。
 * @class 文字列をバッファし、文字列を効率的に結合するクラス
 * @param {String} [string] バッファする文字列
 * @example console.log(new StringBuffer("初期化").append("文字列追加").toString());
 */
function StringBuffer(string) {
  /**
   * バッファする文字列の配列
   * @type String[]
   * @private
   */
  this._buffer = string?[string]:[];
}

/**
 * バッファに文字列を追加する。
 * @param {String} string バッファリングする文字列
 * @return {StringBuffer} このオブジェクト自身
 */
StringBuffer.prototype.append = function(string) {
  this._buffer.push(string);
  return this;
};

/**
 * バッファした文字列を結合して、文字列を返す。
 * @return {String} 結合した文字列
 */
StringBuffer.prototype.toString = function() {
  return this._buffer.join('');
};

