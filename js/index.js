function dark() {
  window.location = "index.html";
  document.getElementById("light").style.display = "block";
}
function showSetting(){
  document.getElementById("dashboard-left-content").style.display ="block";
  document.getElementById("setting-button").style.display ="none";

}
function closeSetting(){
  document.getElementById("dashboard-left-content").style.display ="none";
  document.getElementById("setting-button").style.display ="block";
}
function mSize() {
  document.getElementById("M").classList.add("sizeHover");
  document.getElementById("S").classList.remove("sizeHover");
  document.getElementById("L").classList.remove("sizeHover");
  document.getElementById("Xl").classList.remove("sizeHover");
}
function sSize() {
  document.getElementById("S").classList.add("sizeHover");
  document.getElementById("M").classList.remove("sizeHover");
  document.getElementById("L").classList.remove("sizeHover");
  document.getElementById("Xl").classList.remove("sizeHover");
}
function lSize() {
  document.getElementById("L").classList.add("sizeHover");
  document.getElementById("S").classList.remove("sizeHover");
  document.getElementById("M").classList.remove("sizeHover");
  document.getElementById("Xl").classList.remove("sizeHover");
}
function xlSize() {
  document.getElementById("Xl").classList.add("sizeHover");
  document.getElementById("L").classList.remove("sizeHover");
  document.getElementById("S").classList.remove("sizeHover");
  document.getElementById("M").classList.remove("sizeHover");
}

// timer
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




function tavClick(){
  document.getElementById("dashboard-tav1").classList.add('onclick')
  document.getElementById("dashboard-tav2").classList.remove('onclick')
  document.getElementById("dashboard-tav3").classList.remove('onclick')
  document.getElementById("dashboard-tav4").classList.remove('onclick')
  document.getElementById("dashboard-tav5").classList.remove('onclick')
  document.getElementById("dashboard-tav6").classList.remove('onclick')
  document.getElementById("dashboard-content").style.display ="block";
  document.getElementById("order-content").style.display ="none";
}
function tavClick1(){
  document.getElementById("dashboard-tav1").classList.remove('onclick')
  document.getElementById("dashboard-tav2").classList.add('onclick')
  document.getElementById("dashboard-tav3").classList.remove('onclick')
  document.getElementById("dashboard-tav4").classList.remove('onclick')
  document.getElementById("dashboard-tav5").classList.remove('onclick')
  document.getElementById("dashboard-tav6").classList.remove('onclick')
  document.getElementById("dashboard-content").style.display ="none";
  document.getElementById("order-content").style.display ="block";
}
function tavClick2(){
  document.getElementById("dashboard-tav1").classList.remove('onclick')
  document.getElementById("dashboard-tav2").classList.remove('onclick')
  document.getElementById("dashboard-tav3").classList.add('onclick')
  document.getElementById("dashboard-tav4").classList.remove('onclick')
  document.getElementById("dashboard-tav5").classList.remove('onclick')
  document.getElementById("dashboard-tav6").classList.remove('onclick')
}
function tavClick3(){
  document.getElementById("dashboard-tav1").classList.remove('onclick')
  document.getElementById("dashboard-tav2").classList.remove('onclick')
  document.getElementById("dashboard-tav3").classList.remove('onclick')
  document.getElementById("dashboard-tav4").classList.add('onclick')
  document.getElementById("dashboard-tav5").classList.remove('onclick')
  document.getElementById("dashboard-tav6").classList.remove('onclick')
}
function tavClick4(){
  document.getElementById("dashboard-tav1").classList.remove('onclick')
  document.getElementById("dashboard-tav2").classList.remove('onclick')
  document.getElementById("dashboard-tav3").classList.remove('onclick')
  document.getElementById("dashboard-tav4").classList.remove('onclick')
  document.getElementById("dashboard-tav5").classList.add('onclick')
  document.getElementById("dashboard-tav6").classList.remove('onclick')
}
function tavClick5(){
  document.getElementById("dashboard-tav1").classList.remove('onclick')
  document.getElementById("dashboard-tav2").classList.remove('onclick')
  document.getElementById("dashboard-tav3").classList.remove('onclick')
  document.getElementById("dashboard-tav4").classList.remove('onclick')
  document.getElementById("dashboard-tav5").classList.remove('onclick')
  document.getElementById("dashboard-tav6").classList.add('onclick')
}