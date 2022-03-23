// Function in index.html

function buttonClicked () {
  let stname = document.getElementById("street-name").value
  let stnumber = document.getElementById("street-number").value
  document.getElementById('user-info').innerHTML = "You live at " + stnumber + " " + stname 
}
