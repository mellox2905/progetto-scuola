
var c=0;
var m=0;
function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 150000);
  function frame() {
document.getElementById("cont").innerHTML=c;
document.getElementById("morti").innerHTML=m;
  c=c+1;
  document.getElementById("cont"); 
    if (width == 100) {
      clearInterval(id);
      m++;
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}