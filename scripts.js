var current = 0;
var score = 0;
var max = 3;

function startQuestionnaire() {
  document.getElementById('FirstPage').style.display='none';
  getNext();
}

function getNext() {
  var last = current;
  current += 1;
  if (last > 0) {
    score += getSelected(last);
    document.getElementById('Question' + last).style.display='none';
  }

  if (current <= max) {
    document.getElementById('Question' + current).style.display='block';
  } else {
    document.getElementById('Result').style.display='block';
    document.getElementById('Score').textContent=score;
  }

  console.log(score);
}

function getSelected(q){
  var radio = document.getElementById('MyForm').elements['A' + q];
  return +radio.value;
}
