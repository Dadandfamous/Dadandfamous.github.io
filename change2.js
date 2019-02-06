document.getElementsByClassName("navbar-brand");

var myContentDivs = document.getElementsByClassName("navbar-brand");

if (myContentDivs[0].innerHTML === "Braun") {
  myContentDivs[0].innerHTML = prompt('Please enter your name.')
  alert('Great, you hacked the site... Don\'t forget to unhack it.')
} else {
  myContentDivs[0].innerHTML = "Braun"
} 