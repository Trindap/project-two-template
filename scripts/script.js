// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
 function myFunction(x) {
  x.classList.toggle("change");
} 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
// End of Your Code . Don't delete that line below!!
});