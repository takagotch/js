/**
 * author: JSサポーターズ
 * リスト1: Jasmineの基本的なテストケース
 */

describe('jasmine-node', function(){

  // 必ず通るはずのテスト
  it('should pass', function(){
    expect(1+2).toEqual(3);
  });

  // 非同期テストの例
  it('shows asynchronous test', function(){
    setTimeout(function(){
      expect('second').toEqual('second');
      asyncSpecDone();
    }, 1);
    expect('first').toEqual('first');
    asyncSpecWait();
  });

  // Node.jsスタイルでの非同期テスト
  it('shows asynchronous test node-style', function(done){
    setTimeout(function(){
      expect('second').toEqual('second');
      // done()に引数を渡して呼び出せばテストを失敗させる事ができる。
      done();
    }, 1);
    expect('first').toEqual('first');
  });
});

