let timeoutId;
let endTime;

const start_alert = new Audio('assests/gambare.mp3');
const end_alert = new Audio('assests/onichan.mp3');
const reset_alert = new Audio('assests/baka.mp3');

//user input for the time
// function startpomodoro(){
//     let durationInput = document.getElementById("duration");
//     let duration = parseInt(durationInput.value);
//     if(!NaN(duration) && duration > 0){
//         pomodoro(duration);
//     }
//     else{
//         alert("Enter valid number like 69");
//     }
// }

function pomodoro(mins) {
  start_alert.play();
  clearTimeout(timeoutId); // Clear any previously scheduled updates
  let duration = mins * 60 * 1000; // Duration in milliseconds
  endTime = new Date().getTime() + duration;
  updateTimerDisplay();
}

function take_break(mins){
  clearTimeout(timeoutId); // Clear any previously scheduled updates
  let duration = mins * 60 * 1000; // Duration in milliseconds
  endTime = new Date().getTime() + duration;
  updateTimerDisplay();
}
function resetTimer() {
  reset_alert.play();
  clearTimeout(timeoutId); // Clear any previously scheduled updates
  endTime = null;
  let timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = "00:00";
}

function updateTimerDisplay() {
  if (endTime !== null) {
    let now = new Date().getTime();
    let remainingTime = endTime - now;

    if (remainingTime >= 0) {
      let remainingSeconds = Math.floor(remainingTime / 1000);
      let minutes = Math.floor(remainingSeconds / 60);
      let seconds = remainingSeconds % 60;
      let timerDisplay = document.getElementById("timer");
      timerDisplay.textContent =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);

      // Schedule the next update
      timeoutId = setTimeout(updateTimerDisplay, 100);
    } else {
      end_alert.play();
      alert("Yay! You have successfully fo-cussed!");
    }
  }
}
