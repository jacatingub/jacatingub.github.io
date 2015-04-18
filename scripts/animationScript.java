var desktops = document.querySelectorAll('.desktop');

function hide(element) {
  element.style.setProperty('left', '-100%', element.style.getPropertyPriority('left'));
}

function hideAll() {
  for (var i = 0; i < desktops.length; i++) {
    hide(desktops[i]);
  }
} 

function show(element) {
  element.style.setProperty('left', '0', element.style.getPropertyPriority('left'));
}

document.addEventListener("click", hideAll); //function () {
  
  //show(document.getElementById("map-canvas"));


/*document.getElementById('search-link').addEventListener("click", function () {
  hideAll();
  show(document.getElementById('map-details'));
}, false);*/

show(document.getElementById('map-canvas'));