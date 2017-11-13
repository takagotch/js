/**
 * author: JSサポーターズ
 * リスト5: jQueryを使ったチェックボックスの操作
 */

$(function() {
  $('table.checked input:checkbox.all').click(function() {
    if ($(this).is(':checked')) {
      $('tbody input').attr('checked', 'checked');
    } else { 
      $('tbody input').removeAttr('checked');
    }
  });
  $('table.checked tbody tr').on("click", function(event){
    var checked = $(this).find('input').is(':checked');
    if(!checked) {
      $(this).find('input').attr('checked', 'checked');
    } else {
      $(this).find('input').removeAttr('checked');
    }
  })
  .find(':checkbox') .on('click',function(event){
    event.stopPropagation();
  });
  $("#btn").on("click", function(){
    var arr=[];
    $('tbody tr input:checked').each(function(){
      arr.push($(this).val());
    });
    alert(arr);
  });
});

