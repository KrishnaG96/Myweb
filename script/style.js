$("document").ready(function() {
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

});
