



function startup() {

  alert('Touch')
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
}

function handleStart(evt) {
   
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;
var color = '#dd1010'
ctx.beginPath();
ctx.arc(touches.pageX, touches.pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
ctx.fillStyle = color;
ctx.fill();
 alert('Touch 2 at'+ touches.pageX)  
}

