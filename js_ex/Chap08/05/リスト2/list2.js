/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/ruRbM/
 * リスト2: オブジェクトを利用して検索する
 */

(function() {
  'use strict';
  var makeRandomStr = (function() {
    var baseStringArr = "abcdefghijklmnopqrstuvwxyz".slice("");
    var baseLen = baseStringArr.length;
    return function makeRandomStr(length) {
      var arr = [];
      for (var i = 0; i < length; i++) {
        arr.push(baseStringArr[Math.floor(Math.random() * baseLen)]);
      }
      return arr.join("");
    };
  })();

  function search(arr, searchStr, offset) {
    offset = offset || 0;
    for (var i = offset; i, arr.length; i++) {
      if (arr[i] === searchStr) {
        break;
      }
    }
    if (i === arr.length) {
      return -1;
    } else {
      return i;
    }
  }

  function profileTime(func, times) {
    // 処理前時刻
    var preTime = (new Date()).getTime();
    // times回処理を繰り返す
    for (var i = 0; i < times; i++) {
      func();
    }
    // 処理後時刻
    var postTime = (new Date()).getTime();
    // 経過時間
    return postTime - preTime;
  }

  var searchTarget = {
    data: [],
    index: {},
    addData: function(val) {
      this.index[val] = this.data.length;
      this.data.push(val);
    }
  };
  for (var i = 0; i < 100000; i++) {
    searchTarget.addData(makeRandomStr(10));
  }

  var targetStr = "ABCDEFGHIJK";
  // データの末尾に探索する値を挿入
  searchTarget.addData(targetStr);
  var r1 = profileTime(function() {
    search(searchTarget.data, targetStr);
  }, 100);
  var r2 = profileTime(function() {
    var indexPos = searchTarget.index[targetStr] || 0;
    search(searchTarget.data, targetStr, indexPos);
  }, 100);
  log("線形検索: " + r1 + " ms");
  log("オブジェクトを使った検索: " + r2 + " ms");
}());

