/**
 * author: JSサポーターズ
 * リスト4: Object.definePropertyの使用例
 */

var dateUtil = {};
Object.defineProperties(dateUtil, {
  yesterday: {
    get: function() {
      var d = new Date();
      return new Date(d.getFullYear(),
      d.getMonth(),
      d.getDate() - 1);
    }
  },

  tomorrow: {
    get: function() {
      var d = new Date();
      return new Date(d.getFullYear(),
      d.getMonth(),
      d.getDate() + 1);
    }
  }
});

log("昨日の日付: " + dateUtil.yesterday);
log("明日の日付: " + dateUtil.tomorrow);

