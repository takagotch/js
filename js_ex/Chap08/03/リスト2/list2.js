/**
 * author: JSサポーターズ
 * jsFiddle: http://jsfiddle.net/javascript150/WatgW/
 * リスト2: 2分探索木の実装
 */

/**
* 配列をシャッフルする (http://la.ma.la/blog/diary_200608300350.htm)
* @param なし
* @returns {Array} ランダムにシャッフルした配列
*/
Array.prototype.shuffle = function() {
  var i = this.length;
  while(i){
    var j = Math.floor(Math.random()*i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
};
/**
* 2分探索木のオブジェクトを作成する。
* @class 2分探索木のクラス
* @property {Node} root 2分探索木のノード
*/
function BT(){
  this.root = null;
}

/**
* 新しいNodeオブジェクトを作成する。
* @class ノードを表すクラス
* @param {Number} val ノードの値
* @param {Node} parent 親となるnode
* @property {Number} val ノードの値
* @property {Node} parent 親となるnode
* @property {Node} left 左側のnode
* @property {Node} right 右側のnode
*/
function Node(val, parent){
  this.val = val;
  this.parent = parent;
  this.left = null;
  this.right = null;
}

/**
* 2分探索木に値を追加する
* @param {Number} elem 追加する値
*/
BT.prototype.insert= function(elem){
  if(this.root === null){
    this.root = new Node(elem,null);
    return;
  }
  var n = this.root;
  var p = null;

  while(n !== null){
    p=n;
    if(n.val > elem){
      n = n.left;
    }
    else{
      n = n.right;
    }
  }
  n= new Node(elem,p);
  if(p > elem){
    p.left = n;
  }
  else{
    p.right = n;
  }
};

/**
* 2分探索木で値を検索する
* @param {Number} elem 検索する値
* @return {Node} 検索する値を含むノード
* @throws NotFound 指定の値が見つかりません
*/
BT.prototype.find = function(elem){
  var n = this.root;
  while(n !== null){
    if(n.val > elem){
      n = n.left;
    }
    else if(n.val < elem){
      n = n.right;
    }
    else{
      return n;
    }
  }
  throw "Not Found";
};

function profileTime(func, times) {
  // 処理前時刻
  var preTime = (new Date()).getTime();

  // times回処理を繰り返す
  var i = 0;
  for(; i < times; i++) {
    func();
  }

  // 処理後時刻
  var postTime = (new Date()).getTime();

  // 経過時間
  return postTime - preTime;
}

// 配列を線形探索する関数
function linearSearch(arr, elem){
  for(var i =0,len=arr.length;i<len;i++){
    if(arr[i]===elem)return i;
  }
  return -1;
}

(function(){
  var base = [];
  for(var i=1;i<20000;i++){
    base.push(i);
  }
  var arr = base.shuffle();
  var EXEC_TIMES = 1000;

  // 配列
  var r1=profileTime(function(){
    linearSearch(arr, 10);
  },EXEC_TIMES);
  log("linear search: " + r1 + "ms");

  // ２分探索木
  var bst = new BT();
  // ２分探索木に値を挿入。時間がかかる
  log("binary search tree insert");
  for(var i=0,len=arr.length;i<len;i++){
    bst.insert(i);
  }
  log("binary search tree completed");

  // ２分探索木を使った検索
  var r2 = profileTime(function(){
    bst.find(10);
  },EXEC_TIMES);
  log("Binary Search Tree: " + r2 + "ms");

  try{
    bst.find(-1);
  }catch(e){
    log(e); // -1は追加されていないので、例外が返される。
  }
})();

