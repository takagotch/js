/**
 * author: JSサポーターズ
 * リスト1: 2分探索の実装
 */

var arr = [6, 9, 10, 18, 19, 27, 35, 53 ];
Array.prototype.binary_search = function(key){
  var low = 0;
  var high = this.length -1;
  var mid = 0;
  while(low <= high){
    mid = Math.floor((low+high) / 2);
    if(arr[mid]===key){
      return mid;
    }
    else if(arr[mid] < key){
      low = mid + 1;
    }
    else
    {
      high = mid - 1;
    }
  }
  return -1;
};
arr.binary_search(10);

