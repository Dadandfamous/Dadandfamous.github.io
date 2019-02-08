document.getElementsByClassName("navbar-brand");

var myContentDivs = document.getElementsByClassName("navbar-brand");


if (myContentDivs[0].innerHTML !== "Braun") {
  myContentDivs[0].innerHTML = "Braun"
} else {
// myContentDivs[0].innerHTML = "nuarB"
  let string = ['B','r','a','u','n']


      item1 = Math.floor(Math.random() * 5)
      item2 = Math.floor(Math.random() * 5)
      item3 = Math.floor(Math.random() * 5)
      item4 = Math.floor(Math.random() * 5)
      item5 = Math.floor(Math.random() * 5)
      myContentDivs[0].innerHTML = string[item1]+string[item2]+string[item3]+string[item4]+string[item5]
}
