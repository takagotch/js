/**
 * author: JSサポーターズ
 */

module('xhr', {
  setup: function() {
    // FakeXMLHttpRequest をセットアップ
    this.xhr = sinon.useFakeXMLHttpRequest();
    var requests = this.requests = [];
    this.xhr.onCreate = function (xhr) {
      requests.push(xhr);
    };
  },

  teardown: function() {
    this.xhr.restore();
  }
});

test("test should fetch comments from server", function () {
  // 関数の呼び出しをチェックするspyを作成
  var callback = sinon.spy();

  // 通常どおりjQueryでAjaxを利用する
  jQuery.ajax({
    type: "GET",
    url: "/some/article",
    success: callback
  });
  // XHRのリクエストが1件存在する
  equal(1, this.requests.length);

  // 擬似的にXHRに対してレスポンスを返す
  this.requests[0].respond(
    200, { "Content-Type": "application/json" },
    '[{ "id": 12, "comment": "Hey there" }]'
  );

  // spyで作成したコールバックに正しく値が渡っているか確認
  ok(callback.calledWith([{ id: 12, comment: "Hey there" }]));
});

