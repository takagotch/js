/**
 * author: JSサポーターズ
 * リスト6: コメント
 */

html=Mustache.render(
  'Today{{! ignore me }}.'
);
assert("comment","Today.",html.toString());

