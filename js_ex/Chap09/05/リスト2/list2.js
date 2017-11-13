/**
 * author: JSサポーターズ
 * リスト2: jQueryを使った場合の例
 */

$(function(){
  $("#test").hover(
    function(){
      $(this).removeClass("hoge").addClass("fuga");
    },
    function(){
      $(this).removeClass("fuga").addClass("hoge");
    }
  );
});

