
// >> This File Written By Qkie <<
// !! Editing this may cause some Error !!
// --> Unless you know what are you doing <--
// <!> Dont delete dis <!>
//Blank Code. Maybe Later


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollcontainer").style.width = scrolled + "%";
}

function toggle(e){
	var val = document.getElementById(e);
	if(val.style.display == "none") return val.style.display = "block";
	val.style.display = "none";
}