var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

div1.addEventListener('click', function() {
  alert('Hello! I am #div1.');
});
div2.addEventListener('click', function() {
  alert('Hello! I am #div2.');
});
div3.addEventListener('click', function(e) {
  alert('Hello! I am #div3.');
  e.stopPropagation(); // イベントの伝播を止める
});
