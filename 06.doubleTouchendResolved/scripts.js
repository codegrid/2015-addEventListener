// 要素準備

var floater = document.getElementById('floater');
var counter = document.getElementById('counter');

// ドラッグ中かを記憶するフラグ

var whileDrag = false;

// カウンター増加を止めるためのフラグ

var shouldStopCounter = false;

// クリックされたらカウント増加

counter.addEventListener('touchend', function() {
  var current = parseInt(counter.textContent, 10);
  counter.textContent = current + 1;
});

// touchstartでドラッグ開始

floater.addEventListener('touchstart', function() {
  whileDrag = true;
});

// touchmoveでタッチ位置にfloaterを追従させる

document.addEventListener('touchmove', function(e) {
  if(!whileDrag) { return; }
  e.preventDefault(); // ページごと動いちゃうのでストップ
  var touch = e.changedTouches[0];
  var x = touch.pageX;
  var y = touch.pageY;
  floater.style.left = (x - 30) + 'px';
  floater.style.top = (y - 30) + 'px';
  // ドラッグが始まったということは
  // 次のカウンター増加を実行しないというフラグを立てる
  shouldStopCounter = true;
});

// touchendでドラッグ完了

floater.addEventListener('touchend', function(e) {

  // カウンター増加を実行しないというフラグが立てられていたら
  // stopPropgation
  if(shouldStopCounter) { e.stopPropagation(); }
  // もうこれでドラッグは終わりなので
  // フラグをリセット
  shouldStopCounter = false;
  
  whileDrag = false;
  
}, true);

