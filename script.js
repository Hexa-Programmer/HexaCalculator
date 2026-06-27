let count = 0;
let actcount = 0
let op = 0
let back = document.getElementById("&#9003;")
let mul = document.getElementById("multiplication")
let add = document.getElementById("addition")
let sub = document.getElementById("subtraction")
let div = document.getElementById("division")
let AC = document.getElementById("AC");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");
let equal = document.getElementById("equal")
let display = document.getElementById("Display");

AC.addEventListener("click", function () {
  count = 0
  actcount = 0
w
});
btn1.addEventListener("click", function () {
  count = count * 10 + 1;
  display.textContent = count;
});
btn2.addEventListener("click", function () {
  count = count * 10 + 2;
  display.textContent = count;
});
btn3.addEventListener("click", function () {
  count = count * 10 + 3;
  display.textContent = count;
});
btn4.addEventListener("click", function () {
  count = count * 10 + 4;
  display.textContent = count;
});
btn5.addEventListener("click", function () {
  count = count * 10 + 5;
  display.textContent = count;
});
btn6.addEventListener("click", function () {
  count = count * 10 + 6;
  display.textContent = count;
});
btn7.addEventListener("click", function () {
  count = count * 10 + 7;
  display.textContent = count;
});
btn8.addEventListener("click", function () {
  count = count * 10 + 8;
  display.textContent = count;
});
btn9.addEventListener("click", function () {
  count = count * 10 + 9;
  display.textContent = count;
});
btn0.addEventListener("click", function () {
  count = count * 10;
  display.textContent = count;
});
add.addEventListener("click", function () {
  op = 1
  actcount = count
  count = 0
  display.textContent = count;
})
sub.addEventListener("click", function () {
  op = 2
  actcount = count
  count = 0
  display.textContent = count;
})
mul.addEventListener("click", function () {
  op = 3
  actcount = count
  count = 0
  display.textContent = count;
})
div.addEventListener("click", function () {
  op = 4
  actcount = count
  count = 0
  display.textContent = count;
})
equal.addEventListener("click", function () {
  if (op == 1) {
    count = count + actcount
    display.textContent = count;
  }
  else if (op == 2) {
    count = actcount - count
    display.textContent = count;
  }
  else if (op == 3) {
    count = actcount * count
    display.textContent = count;
  }
  else if (op == 4) {
    count = actcount / count
    display.textContent = count;
  }
})