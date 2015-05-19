var el = document.getElementById('foo');

el.addEventListener('click', function(e) {
  e.preventDefault();
  alert('foo clicked!');
  alert(e.pageX); // 120 とか
});
