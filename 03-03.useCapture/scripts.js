var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

div1.addEventListener('click', function() {
  alert('Hello! I am #div1.');
}, true);
div2.addEventListener('click', function() {
  alert('Hello! I am #div2.');
}, true);
div3.addEventListener('click', function() {
  alert('Hello! I am #div3.');
});
