/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/xBrYG/
 * リスト1: offsetWidth／offsetHeightを利用したサイズの取得
 */

var target = document.getElementById("target");

assert("target.offsetWidth=106px", target.offsetWidth, 106);
assert("target.offsetHeight=126px", target.offsetHeight, 126);
assert("$(target).width()=100px", $(target).width(), 100);
assert("$(target).height()=120px", $(target).height(), 120);
assert("$(target).innerWidth()=104px", $(target).innerWidth(), 104);
assert("$(target).innerHeight()=124px", $(target).innerHeight(), 124);
assert("$(target).outerWidth()=106px", $(target).outerWidth(), 106);
assert("$(target).outerHeight()=126px", $(target).outerHeight(), 126);

