/**
 * author: JSサポーターズ
 * リスト1: メソッドチェーン形式の記述
 */

var lyrics = [
  { words: "Come listen all you galls and boys I's jist from Tuckyhoe" },
  { words: "I'm going to sing a little song, my name's Jim Crow" },
  { words: "Weel about and turn about and do jis so" },
  { words: "Eb'ry time I weel about and jump Jim Crow" }
];

// 単語の出現頻度を求める
var words = _(lyrics).chain()
  .map(function(line) { return line.words.split(' '); })
  .flatten()
  .reduce(function(counts, word) {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {}).value();

_.each(words, function(num, word) { log(word + ":" + num); });

