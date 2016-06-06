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
    showResult();
  }

  console.log(score);
}

function getSelected(q){
  var radio = document.getElementById('MyForm').elements['A' + q];
  return +radio.value;
}

function showResult() {
  var house;
  var houseImage;
  if (score <= 4) {
    house = "Doghouse";
    houseImage = 'https://cravencottagenewsround.files.wordpress.com/2014/08/doghouse.jpg';
  } else if (score <= 6) {
    house = "Warehouse";
    houseImage = 'http://enpundit.s3.amazonaws.com/wp-content/uploads/2012/06/Oriental-Warehouse-Apartment-Loft-Conversion-in-San-Francisco-3.jpg';
  } else {
    house = "Farm";
    houseImage = 'http://www.insurewithellis.com/uploads/1/3/3/7/13377767/9946815_orig.jpg';
  }
  document.getElementById('Result').style.display='block';
  document.getElementById('Score').textContent=house;
  document.getElementById('houseImage').src=houseImage;
}
