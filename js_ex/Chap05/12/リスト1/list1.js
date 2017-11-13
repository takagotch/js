/**
 * author: JSサポーターズ
 * リスト1: RequireJSの基本的な使い方
 */

require([
  'http://javascript150.bitbucket.org/05-12/library/libA.js',
  'http://javascript150.bitbucket.org/05-12/library/libB.js'
  ], function() {
    log("libA.js, libB.js loaded!");
  }
);

