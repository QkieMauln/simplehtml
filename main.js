// Created For Romansyah
// >> This File Written By Qkie <<
// !! Editing this may cause some Error !!
// --> Unless you know what are you doing <--
// <!> Dont delete dis <!>

//listener
document.getElementById("passin").addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    waitverify('passin', 'loadbox', 'waittill');
  }
})

//body color changer
function rgbToHex(rgb) {
var hex= Number(rgb).toString(16);
 if(hex.length<2) {
  hex = "0" + hex;
  }
 return hex.toUpperCase();
}
function Converter(r,g,b){
 var red = rgbToHex(r);
 var green = rgbToHex(g);
 var blue = rgbToHex(b);
 return red+green+blue;
}
//Here... I got Headache for Solving this!
function colorRandom(){
var red = Math.floor(Math.random()*205)+50;
var green = Math.floor(Math.random()*205)+50;
var blue = Math.floor(Math.random()*205)+50;
return "#"+Converter(red, green, blue);
}
//setInterval(function(){
//  document.body.style.background = colorRandom();
//}, 5000);


//count Down Time
var backload = document.getElementById("waittill");
var countDownDate = new Date("Nov 17, 2020 00:00:00").getTime();
var timeback = document.getElementById("time");
var cdount = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  timeback.innerHTML = days + " days , " + hours + " hours , "
  + minutes + "  minutes , " + seconds + " seconds ";
  if (distance < 0) {
    clearInterval(cdount);
    document.getElementById("waittill").style.opacity = 0;
    toggle("loadbox","");
    setTimeout(function(){
      toggle("", "waittill")}, 1000)
    timeback.innerHTML = "ITS STARTED!"
    startloader();
  }
}, 1000);

//loading bar
function startloader(){
var loadtick1 = 0, loadtick = setInterval(function(){
  loadtick1++;
  document.getElementById("loadprogress").style.width = loadtick1 + "%";
  document.getElementById("loadstat").innerHTML = loadtick1+ " %";
  document.getElementById("loadinf").innerHTML = `Nav. User Agent : ${navigator.userAgent}`
  if(loadtick1>99){clearInterval(loadtick);
  document.getElementById("loadstat").innerHTML = "420.69 % Made By Qky hehe";
    setTimeout(function(){
    toggle('kesatu','loadbox')}, 10);}
}, 60);}

//toggle function
function toggle(show, hide){
  if(!show){document.getElementById(hide).style.opacity = 0;
  setTimeout(function(){
  document.getElementById(hide).style.opacity = 1;
  document.getElementById(hide).style.display = "none";},500)}
  else if(!hide){document.getElementById(show).style.display = "block";}
  else {
  document.getElementById(show).style.display = "block";
  document.getElementById(hide).style.opacity = 0;
  setTimeout(function(){
  document.getElementById(hide).style.opacity = 1;
  document.getElementById(hide).style.display = "none";},500);
    }
}
//password verification waiting time
function waitverify(input, show, hide){
  var inpass = btoa(document.getElementById(input).value),
  password = 'cm9tYW51bHRhaA==';
  if(inpass === password){
    console.log("access granted");
    toggle(show, hide);
    startloader();
  }else{
    toggle('wrongpass', "")
    setTimeout(function(){
      toggle('', 'wrongpass')
    }, 5000);
  }
}