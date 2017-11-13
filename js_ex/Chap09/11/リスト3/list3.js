/**
 * author: JSサポーターズ
 * リスト3: 条件分岐
 */

var template = 'shown{{#foo}}Never shown!{{/foo}}';
var html = Mustache.to_html( template, {
  foo:false
});
assert("fooのブロックは表示されない","shown", html);

