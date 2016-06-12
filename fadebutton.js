
// Show result when quiz finished
  // Set text and image for results pane and then display it
  document.getElementById('result').textContent = ' ' + houseType.toUpperCase();
  document.getElementById('HouseImage').src = houseImage;
  document.getElementById('results').style.display = 'block';

// Then I want the button to Fade IN, now it just appears as part of 'results'.
// Button being given extra id="playAgain"


  // fadeIn('playAgain');



  // function fadeIn(elementToFadeIn) {
  //     var op = 0;
  //     document.getElementById(elementToFadeIn).style.opacity = op;
  //     var timer = setInterval(function () {
  //                         if (op >= 1 || op >= 1.0){
  //                             console.log('done', op)
  //                             clearInterval(timer);
  //                             return;
  //                         }
  //                 //        obj.style.opacity = op.toFixed(1);
  //                         op += 0.1;
  //                         console.log(op);
  //                     }, 300);
  //                     return this;
  // }

  var fadeIn = setInterval(function(){ timer() }, 300);

  function timer() {
  //var op = 0;
    var d = fadeButtonIn();
    document.getElementById('playAgain').style.opacity = d;
  }

  function fadeButtonIn() {
    var op = 0;
  //   if (op >= 1 || op >= 1.0){
  //       console.log('done', op)
  //       clearInterval(timer);
  //       return;
  //   }
  // //        obj.style.opacity = op.toFixed(1);
  //   op += 0.1;
    console.log(op);
  }


  // var myVar = setInterval(function(){ myTimer() }, 1000);
  //
  // function myTimer() {
  //     var d = new Date();
  //     var t = d.toLocaleTimeString();
  //     document.getElementById("demo").innerHTML = t;
  // }
  //
  // function myStopFunction() {
  //     clearInterval(myVar);
  // }

    // function unfade(playAgainButton) {
    //   var op = 0;  // initial opacity
    //   console.log(opacity);
    // }
  //     element.style.display = 'block';
  //     var timer = setInterval(function () {
  //         if (op >= 1){
  //             console.log('done', op)
  //             clearInterval(timer);
  //         }
  //         element.style.opacity = op;
  //     //    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
  //         op += op * 0.1;
  //         console.log(op);
  //     }, 10);
  // }();
  // }

  // fadeIn: function (len) {
  //                 var obj = this.e;
  //                 obj.style.display = '';
  //                 var op = 0;
  //                 var timer = setInterval(function () {
  //                     if (op >= 1 || op >= 1.0){
  //                         console.log('done', op)
  //                         clearInterval(timer);
  //                     }
  //                     obj.style.opacity = op.toFixed(1);
  //                     op += 0.1;
  //                     console.log(obj.style.opacity);
  //                 }, len);
  //                 return this;
  //             }
}

function startAgain() {
  document.getElementById('results').style.display = 'none';
  document.getElementById('intro').style.display='block';
}
