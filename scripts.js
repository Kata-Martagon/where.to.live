// Global variables
var current = 0;             // Current question (quiz not started so current question set to zero)
var score = 0;               // Cumulative score
var totalQuestions = 3;      // Total number of questions

// Start questionnaire: hide intro div and call getNext() on quiz
function startQuestionnaire() {
  current = 0;             // Current question (quiz not started so current question set to zero)
  score = 0;
  document.getElementById('intro').style.display='none';
  getNext();
}

// Gets next question in quiz
function getNext() {

  // Store ref to last question number and move pointer to current question on
  var last = current;
  current += 1;

  if (last > 0) {
    // If last was a valid question (i.e. quiz already started)
    // update the score with last question answer and then hide last question
    score += getSelected(last);
    document.getElementById('Question' + last).style.display='none';
  }

  if (current <= totalQuestions) {
    // If not the end of the quiz then move on to the next question
    document.getElementById('Question' + current).style.display='block';
  } else {
    // If end of quiz then show result
    showResult();
  }
}

// Gets value for answer to current question
function getSelected(questionNumber){
  var radio = document.getElementById('MyForm').elements['A' + questionNumber];
  return +radio.value;
}

// Show result when quiz finished
function showResult() {
  var houseType;
  var houseImage;
  // Set houseType and houseImage depending on score
  if (score <= 4) {
    houseType = "Doghouse";
    houseImage = 'https://upload.wikimedia.org/wikipedia/commons/7/79/Castledaly_Manor_-_Doghouse_-_geograph.org.uk_-_1606827.jpg';
  } else if (score <= 6) {
    houseType = "Warehouse";
    houseImage = 'http://vignette2.wikia.nocookie.net/warehouse13/images/2/23/Warehouse_exterior.jpg/revision/latest?cb=20090817035740';
  } else {
    houseType = "Farm";
    houseImage = 'http://www.gwaenynog.com/wp-content/uploads/2013/03/Gwaenynog-Farmhouse-web.jpg';
  }

  // Set text and image for results pane and then display it
  document.getElementById('result').textContent = ' ' + houseType.toUpperCase();
  document.getElementById('HouseImage').src = houseImage;
  document.getElementById('results').style.display = 'block';
}

function startAgain() {
  document.getElementById('results').style.display = 'none';
  document.getElementById('intro').style.display='block';
  current = 0;
  score = 0;
}
