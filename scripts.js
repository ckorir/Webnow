
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navcontainer").style.top = "0";
  } else {
    document.getElementById("navcontainer").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}



