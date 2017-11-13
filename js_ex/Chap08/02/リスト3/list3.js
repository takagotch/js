/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/nc3yM/
 * リスト3: setTimeoutを利用した継続渡し
 */

$(function() {
  $('#cps_btn').click(function() {
    fact_loop_cps(100, function(r) {
      log(r);
    });
  });
  $('#btn').click(function() {
    fact_loop(100);
  });
});

function fact_loop(n) {
  var acc = 1;
  for (var i = 1; i <= n; i++) {
    acc *= i;
    log("fact_loop(" + n + ") i=" + i + " acc=" + acc);
  }
  return acc;
}

function wrapper(n, i, acc, ret) {
  log("fact_loop(" + n + ") i=" + i + " acc=" + acc);
  return ret();
}

function fact_loop_cps(n, ret) {
  function fact_loop_cps_sub(i, acc, ret) {
    if (i <= n) {
      acc *= i;
      wrapper(n, i, acc, function() {
        setTimeout(function() {
          fact_loop_cps_sub(i + 1, acc, function(result) {
            ret(result)
          });
        }, 100);
      });
    } else {
      ret(acc);
    }
  }
  setTimeout(function() {
    fact_loop_cps_sub(1, 1, function(result) {
      ret(result)
    });
  }, 0);
}

