/*var navContainer = document.getElementById("nav");

// Get all buttons with class="navBar" inside the container
var navs = navContainer.getElementsByClassName("navBar");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}*/

function toggleMenu() {
    // get the menu
    var menu = document.getElementById('nav');

    // get the current value of the menu's display property
    var displaySetting = menu.style.display;

    // now toggle the menu, depending on current state
    if (displaySetting == 'block') {
      // menu is visible. hide it
      menu.style.display = 'none';

    }
    else {
      // menu is hidden. show it
      menu.style.display = 'block';
    }
  }
function pancakeAlert(){
var date = new Date();
var alert = document.getElementById("pancake_alert");
if (date.getDay() == 5) {
      alert.style.display = "block";
  }
else {
      alert.style.display = "none";
  }
}
