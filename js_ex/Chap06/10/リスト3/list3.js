/**
* author: JSサポーターズ
* jsFiddle: http://jsfiddle.net/javascript150/YqKQc/
* リスト3: 良い分割の方法
*/

function heavyProcessA() {
  log("heavyProcessA: start");
  var time = 500;
  var now = (new Date()).getTime();
  var begin = now;
  while (now < begin + time) {
    now = (new Date()).getTime();
  }
  log("heavyProcessA: finish");
}

function heavyProcessB() {
  log("heavyProcessB: start");
  var time = 500;
  var now = (new Date()).getTime();
  var begin = now;
  while (now < begin + time) {
    now = (new Date()).getTime();
  }
  log("heavyProcessB: finish");
}

function heavyProcessBad() {
  log("heavyProcessBad: before call heavyProcessA");
  heavyProcessA();
  heavyProcessB();
  log("heavyProcessBad: after call heavyProcessB");
}

function heavyProcessGood() {
  log("heavyProcessGood: before call heavyProcessA");
  setTimeout(function() {
    heavyProcessA();
    setTimeout(heavyProcessB, 20);
  }, 20);
  log("heavyProcessGood: after call heavyProcessB");
}

$("#bad").on("click", heavyProcessBad);
$("#good").on("click", heavyProcessGood);

