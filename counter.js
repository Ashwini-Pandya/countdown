var add = document.getElementById("increa");
var sub = document.getElementById("decrea");
var reset = document.getElementById("set");
var num = 0;
var black = 0;
function addition() {
  num = num + 1;
  //   console.log(num);
  document.getElementById("root").innerHTML = num;
  if (num > 0) {
    document.getElementById("root").style.color = "green";
  }
}
function subtraction() {
  num = num - 1;
  //   console.log(num);
  document.getElementById("root").innerHTML = num;
  if (num < 0) {
    document.getElementById("root").style.color = "red";
  }
}
function settozero() {
  num = 0;
  //   console.log(num);
  document.getElementById("root").innerHTML = num;
  if (num === 0) {
    if (black % 2 === 0) {
      document.getElementById("root").style.color = "black";
    } else {
      document.getElementById("root").style.color = "white";
    }
  }
}
console.log(num);
function darkmode() {
  black = black + 1;
  console.log(black);
  var element = document.body;
  element.classList.toggle("dark-mode");
}
