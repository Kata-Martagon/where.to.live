var current = 1;
document.getElementById('Question1').style.display='block';

function getNext() {
  var last = current;
  current += 1;
  document.getElementById('Question' + last).style.display='none';
  document.getElementById('Question' + current).style.display='block';
}
