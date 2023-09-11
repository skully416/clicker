window.onload = function() {
  var score = 0;
  var autoclickers = 0;

  var scoreDisplay = document.getElementById("score");
  var clickBtn = document.getElementById("clickBtn");
  var autoclickersDisplay = document.getElementById("autoclickers");
  var buyBtn = document.getElementById("buyBtn");

  clickBtn.onclick = function() {
    score++;
    updateDisplay();
  };

  buyBtn.onclick = function() {
    var autoclickerCost = Math.floor(10 * Math.pow(1.1, autoclickers));
    if (score >= autoclickerCost) {
      autoclickers++;
      score -= autoclickerCost;
      updateDisplay();
    }
  };

  function updateDisplay() {
    scoreDisplay.innerHTML = score;
    autoclickersDisplay.innerHTML = autoclickers + " Autoclickers";
  }

  function addScore() {
    score += autoclickers;
    updateDisplay();
  }

  setInterval(addScore, 1000 / autoclickers);
};
