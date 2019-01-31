var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "70%",
  "C": "69%",
  "CPP": "65%",
  "Java": "60%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;

  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);

  multiply++;

});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
