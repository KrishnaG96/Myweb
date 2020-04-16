$("document").ready(function() {
 
    $(".modal").modal('show');

  var type = $("#type").text();
  console.log(type);
  var i = 0;
  var txt = 'Gamer|Web Developer.';
  var speed = 150;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("type").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
  window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(height);
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

});
