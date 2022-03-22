let start = document.getElementById("start");
let reset = document.getElementById("reset");
let stop = document.getElementById("stop");
let watch = document.querySelector(".watch");
let mill = 00;
let second = 00;
let minute = 00;
let mm = document.querySelector(".mill");
let ss = document.querySelector(".second");
let nn = document.querySelector(".minut");
let interval;
function myStart() {
  mill++;
  if (mill <= 9) {
    mm.innerHTML = "0" + mill;
  }
  if (mill > 9) {
    mm.innerHTML = mill;
  }
  if (mill > 99) {
    second++;
    ss.innerHTML = "0" + second;
    mill = 0;
    mm.innerHTML = "0" + 0;
  }
  if (second > 9) {
    ss.innerHTML = second;
  }
  if (second > 59) {
    minute++;
    nn.innerHTML = "0" + minute;
    second = 0;
    ss.innerHTML = "0" + 0;
  }
}

start.onclick = function () {
  clearInterval(interval);
  interval = setInterval(myStart, 10);
};

stop.onclick = function () {
  clearInterval(interval);
};

reset.onclick = function () {
  clearInterval(interval);
  mill = "00";
  second = "00";
  minute = "00";
  mm.innerHTML = mill;
  ss.innerHTML = second;
  nn.innerHTML = minute;
};
