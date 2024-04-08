let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let color = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
  }

  levelUp();
});

function btnFlash(randBtn) {
  randBtn.classList.add("flash");
  setTimeout(function () {
    randBtn.classList.remove("flash");
  }, 200);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let ranIdx = Math.floor(Math.random() * 4);
  let randColor = color[ranIdx];
  gameSeq.push(randColor);
  let randBtn = document.querySelector(`.${randColor}`);
  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game is Over. Your Score <b>${level}.</b><br /> Press any to restart`;
    document.body.style.backgroundColor = 'red';
    setTimeout(function(){
        document.body.style.backgroundColor = 'white';
    }, 300);
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}