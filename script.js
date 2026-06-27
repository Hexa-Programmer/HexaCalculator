// script.js

let count = 0;
let actcount = 0;
let op = 0;
let expressions = "";

let mul = document.getElementById("multiplication");
let add = document.getElementById("addition");
let sub = document.getElementById("subtraction");
let div = document.getElementById("division");
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
let back = document.getElementById("Back");
let equal = document.getElementById("equal");
let display = document.getElementById("Display");
let historyList = document.getElementById("historyList");
let appContainer = document.getElementById("appContainer");
let editorArea = document.querySelector(".editor");

let calculations = [];
try {
  let savedCalculations = localStorage.getItem("hexa_calculations");
  calculations = savedCalculations ? JSON.parse(savedCalculations) : [];
} catch (e) {
  calculations = [];
}

AC.addEventListener("click", function () {
  count = 0;
  actcount = 0;
  op = 0;
  expressions = "";
  display.textContent = count;
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

back.addEventListener("click", function () {
  count = Math.floor(count / 10);
  display.textContent = count;
});

add.addEventListener("click", function () {
  op = 1;
  actcount = count;
  expressions = actcount + " + ";
  count = 0;
  display.textContent = count;
});
sub.addEventListener("click", function () {
  op = 2;
  actcount = count;
  expressions = actcount + " - ";
  count = 0;
  display.textContent = count;
});
mul.addEventListener("click", function () {
  op = 3;
  actcount = count;
  expressions = actcount + " × ";
  count = 0;
  display.textContent = count;
});
div.addEventListener("click", function () {
  op = 4;
  actcount = count;
  expressions = actcount + " ÷ ";
  count = 0;
  display.textContent = count;
});

equal.addEventListener("click", function () {
  let finalResult = 0;
  let validOp = false;

  if (op == 1) {
    expressions += count;
    finalResult = actcount + count;
    validOp = true;
  }
  else if (op == 2) {
    expressions += count;
    finalResult = actcount - count;
    validOp = true;
  }
  else if (op == 3) {
    expressions += count;
    finalResult = actcount * count;
    validOp = true;
  }
  else if (op == 4) {
    expressions += count;
    finalResult = count !== 0 ? actcount / count : "Error";
    validOp = true;
  }

  if (validOp) {
    count = finalResult === "Error" ? 0 : finalResult;
    display.textContent = finalResult;
    
    calculations.push({
      expr: expressions,
      res: finalResult
    });
    saveCalculations();
    renderHistory();
    op = 0;
  }
});

editorArea.addEventListener("click", function (e) {
  if (appContainer.classList.contains("sidebar-open") && !e.target.closest(".back-btn")) {
    appContainer.classList.remove("sidebar-open");
  }
});

function saveCalculations() {
  localStorage.setItem("hexa_calculations", JSON.stringify(calculations));
}

function renderHistory() {
  historyList.innerHTML = "";
  calculations.forEach(calc => {
    let divItem = document.createElement("div");
    divItem.classList.add("history-item");

    let exprSpan = document.createElement("span");
    exprSpan.classList.add("history-expr");
    exprSpan.textContent = calc.expr;

    let resSpan = document.createElement("span");
    resSpan.classList.add("history-res");
    resSpan.textContent = calc.res;

    divItem.appendChild(exprSpan);
    divItem.appendChild(resSpan);
    historyList.appendChild(divItem);
  });
}

function clearHistory() {
  calculations = [];
  saveCalculations();
  renderHistory();
}

function toggleSidebar() {
  appContainer.classList.toggle("sidebar-open");
}

function init() {
  renderHistory();
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hide-loader');
  }, 2200);
}

init();