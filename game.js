const start = document.getElementById("start");
const end = document.getElementById("end");
const wall = document.getElementsByClassName("boundary");
const boundary1 = document.getElementById("boundary1");
// const div = document.getElementsByClassName("boundary example");
// var div = document.createElement("div");
// document.getElementById("main").appendChild(div);
// div.classList.add("div-class");
// const score = JSON.parse(localStorage.getItem("div-class")) || [];
// const highScoreList = document.querySelector("#example");

document.addEventListener("DOMContentLoaded", () => {
  startGame();
});

window.prompt(
  "Hello, Welcome to The Amazing Mouse Game! you have one minute only to complete the game when you start. PLease Enter Your Name Here:"
);

start.addEventListener("mouseover", () => {
  startGame();
  setTimeout(() => {
    location.reload();
  }, 60000);
});

function startGame() {
  for (var i = 0; i < wall.length; i++) {
    wall[i].addEventListener(
      "mouseover",
      () => {
        document.getElementById("game").style.backgroundColor = "red";
        document.getElementById("boundary1").innerHTML = "YOU LOSS";
      },
      { once: true }
    );
  }
  end.addEventListener(
    "mouseover",
    () => {
      document.getElementById("boundary1").innerHTML = "YOU WON";
      return;
    },
    { once: true }
  );

  end.addEventListener(
    "mouseout",
    () => {
      document.getElementById("boundary1").innerHTML = "SCORE = 100";
      return;
    },
    { once: true }
  );
}

// highScoreList.innerHTML = score
//   .map((score) => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`;
//   })
//   .join("");
