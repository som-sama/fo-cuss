var timeoutId;
var endTime;

function pomodoro(mins) {
  clearTimeout(timeoutId); // Clear any previously scheduled updates
  var duration = mins * 60 * 1000; // Duration in milliseconds
  endTime = new Date().getTime() + duration;
  updateTimerDisplay();
}

function resetTimer() {
  clearTimeout(timeoutId); // Clear any previously scheduled updates
  endTime = null;
  var timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = "00:00";
}

function updateTimerDisplay() {
  if (endTime !== null) {
    var now = new Date().getTime();
    var remainingTime = endTime - now;

    if (remainingTime >= 0) {
      var remainingSeconds = Math.floor(remainingTime / 1000);
      var minutes = Math.floor(remainingSeconds / 60);
      var seconds = remainingSeconds % 60;
      var timerDisplay = document.getElementById("timer");
      timerDisplay.textContent =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);

      // Schedule the next update
      timeoutId = setTimeout(updateTimerDisplay, 100);
    } else {
      alert("Yay! You have successfully fo-cussed!");
      resetTimer();
    }
  }
}
