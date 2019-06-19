<html>
<head>

<style>
.slider
{
display:none;
}
</style>
</head>
<body>
<div class="imgs" style="max-width:500px">

<img class="slider" src="file:///D|/jobs/_downloadfiles_wallpapers_1920_1080_god_of_war_2_ps2_game_4169.jpg" style="width:300%">
<img class="slider" src="file:///D|/jobs/9EVEJeI.jpg" style= "width:300%">
<img class="slider" src="file:///D|/jobs/2881950-game-wallpapers.jpg" style="width:300%">
</div>
<script>
var index=0;
caro();
function caro()
{
var i;
var x=document.getElementsByClassName("slider");
for(i=0;i<x.length;i++)
{
x[i].style.display="none";
}
index++;
if(index > x.length)
{
index=1;
}
x[index-1].style.display="block";
setTimeout(caro,3000);
}

</script>
</body>
</html>