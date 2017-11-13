/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/PC8vD/
* リスト4: jQuery.Deferredを用いてチェーン実行する
*/

function heavyProcessA() {
  var deferred = new $.Deferred();
  setTimeout(function() {
    log("heavyProcessA: start");
    var time = 500;
    var now = (new Date()).getTime();
    var begin = now;
    while (now < begin + time) {
      now = (new Date()).getTime();
    }
    log("heavyProcessA: finish");
    deferred.resolve();
  }, 20);
  return deferred.promise();
}

function heavyProcessB() {
  var deferred = new $.Deferred();
  setTimeout(function() {
    log("heavyProcessB: start");
    var time = 500;
    var now = (new Date()).getTime();
    var begin = now;
    while (now < begin + time) {
      now = (new Date()).getTime();
    }
    log("heavyProcessB: finish");
    deferred.resolve();
  }, 20);
  return deferred.promise();
}

function jQueryDeferredSample() {
  var defer = $.Deferred();
  defer.done(function () {
    log("jQueryDeferredSample: before call heavyProcessA");
  }).pipe(function() {
    return heavyProcessA();
  }).pipe(function() {
    return heavyProcessB();
  }).done(function() {
    log("jQueryDeferredSample: after call heavyProcessB");
  });
  defer.resolve();
}

$("#jqdeferred").on("click", jQueryDeferredSample);

