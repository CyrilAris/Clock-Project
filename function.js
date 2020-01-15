function startTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var ampm = "PM";
  m = checkTime(m);
  s = checkTime(s);
  if (h < 12) {
    ampm = "AM"
  }
  if (h > 12) {
    h -=12
  }
  if (h < 10) {
    h = "0" + h
  }
  if (m < 10) {
    m = "0" + m
  }
  if (s < 10) {
    s = "0" + s
  }
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s + " " + ampm;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
function play() {
var audio = new Audio('https://www.youtube.com/watch?v=moSFlvxnbgk'[original].mp3);
audio.play();
}
