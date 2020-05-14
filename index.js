var choices = ["paper", "rock", "scissors"];
var userScore = 0;

$(document).ready(function () {
  $(".result").hide();
});

$(".game").click(function (e) {
  var userChoice = e.target.title;
  var house = houseSelection();
  calculate(userChoice, house);
});

$(".play-again").click(function () {
  $(".result").hide();
  $(".game").show();
  $("#p1").removeClass();
  $("#p2").removeClass();
});

function houseSelection() {
  var num = Math.floor(Math.random() * 3);
  houseChoice = choices[num];
  return houseChoice;
}

function calculate(a, b) {
  $("#p1")
    .addClass("result-" + a)
    .addClass(a);
  $("#p2")
    .addClass("result-" + b)
    .addClass(b);
  $("#scissors-img").attr("src", "images/icon-" + a + ".svg");
  $("#paper-img").attr("src", "images/icon-" + b + ".svg");
  if (a === b) {
    var outcome = "draw";
  }
  if (a === "paper") {
    if (b === "scissors") {
      var outcome = "lose";
    } else if (b === "rock") {
      var outcome = "win";
    }
  }
  if (a === "rock") {
    if (b === "scissors") {
      var outcome = "win";
    }
    if (b === "paper") {
      var outcome = "lose";
    }
  }
  if (a === "scissors") {
    if (b === "rock") {
      var outcome = "lose";
    }
    if (b === "paper") {
      var outcome = "win";
    }
  }
  result(outcome);
}

function result(c) {
  $(".game").hide();
  $(".result").show();
  if (c === "win") {
    $(".result-dec").text("You Win!");
    $("#p1").addClass("winner");
    userScore++;
  }
  if (c === "lose") {
    $(".result-dec").text("You Lose!");
    $("#p2").addClass("winner");
    userScore--;
  }
  if (c === "draw") {
    $(".result-dec").text("Draw!");
  }
  $(".score-num").text(userScore);
}

// rules

$(".rules-btn").click(function () {
  $(".rules-popup").addClass("active");
});

$(".rules-cross").click(function () {
  $(".rules-popup").removeClass("active");
});
