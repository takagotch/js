/**
 * author: JSサポーターズ
 * リスト5: 配列のループ例
 */

var list = '<ul>{{#people}}<li>{{.}}</li>{{/people}}</ul>';

html = Mustache.to_html( list, {
  people:["apple", "bar", "baz"]
});

$("#test").html(html);

